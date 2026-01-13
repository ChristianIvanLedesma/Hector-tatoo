import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

const prisma = new PrismaClient();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

interface CloudinaryUploadResult {
    public_id: string;
    secure_url: string;
    width: number;
    height: number;
}

export async function POST(request: Request) {
    try {
        const formData = await request.formData();

        const fileEntry = formData.get("imagen");
        if (!(fileEntry instanceof File)) {
            return NextResponse.json({ message: "Imagen inválida" },{ status: 400 });
        }

        const empresa = formData.get("empresa") as string;
        

        if (!empresa) {
            return NextResponse.json(
                { message: "La empresa es obligatorio" },
                { status: 400 }
            );
        }

        const buffer = Buffer.from(await fileEntry.arrayBuffer());

        const uploadResult: CloudinaryUploadResult = await new Promise(
            (resolve, reject) => {
                cloudinary.uploader
                    .upload_stream(
                        { folder: "hector-tatoo" },
                        (error, result) => {
                            if (error) return reject(error);
                            if (!result)
                                return reject(new Error("Error al subir el sponsor"));
                            resolve(result as CloudinaryUploadResult);
                        }
                    )
                    .end(buffer);
            }
        );

        const nuevaImagen = await prisma.sponsor.create({
            data: {
                empresa,
                imagen: uploadResult.secure_url,
            },
        });

        return NextResponse.json(
            {
                nuevaImagen,
                message: "Sponsor publicada correctamente",
            },
            { status: 201 }
        );
    } catch (error: unknown) {
        console.error(error);
        return NextResponse.json(
            { message: "Error al publicar el sponsor" },
            { status: 500 }
        );
    }
}

