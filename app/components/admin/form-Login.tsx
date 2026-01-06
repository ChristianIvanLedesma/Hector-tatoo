import { Dispatch, FormEvent, SetStateAction } from "react";
interface PropsFormAdmin{
    login: (e:FormEvent)=>void;
    email:string;
    password:string;
    setEmail: Dispatch<SetStateAction<string>>;
    setPassword: Dispatch<SetStateAction<string>>;
    loading:boolean;
}

export default function FormularioLoginAdmin({ login, email, setEmail, password, setPassword, loading }: PropsFormAdmin) {
  return (
      <form
          onSubmit={login}
          className="max-w-sm w-full mx-auto mt-24 p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl flex flex-col gap-5"
      >
          <div className="text-center space-y-1">
              <h2 className="text-white text-2xl font-bold tracking-wide">
                  Panel Admin
              </h2>
              <p className="text-white/60 text-sm">
                  Acceso restringido
              </p>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
              <label className="text-white/70 text-sm">Email</label>
              <input
                  type="email"
                  placeholder="admin@hectortatoo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-3 py-2 rounded-lg bg-black/40 text-white border border-white/20 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
                  required
              />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
              <label className="text-white/70 text-sm">Contraseña</label>
              <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="px-3 py-2 rounded-lg bg-black/40 text-white border border-white/20 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition"
                  required
              />
          </div>

          
          <button
              type="submit"
              disabled={loading}
              className="mt-4 py-2.5 rounded-lg font-semibold text-white cursor-pointer bg-red-600 hover:bg-red-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
              {loading ? "Ingresando..." : "Ingresar"}
          </button>
      </form>

  );
}