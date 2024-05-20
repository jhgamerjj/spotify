import {
  Home as Homeicon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Volume,
} from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex itens-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>

          <nav className="space-y-5 mt-10">
            <a
              href=""
              className="flex itens-center gap-2 text-sn font-senibold text-zinc-200"
            >
              <Homeicon />
              Home
            </a>
            <a
              href=""
              className="flex itens-center gap-2 text-sn font-senibold text-zinc-200"
            >
              <Search />
              Search
            </a>
            <a
              href=""
              className="flex itens-center gap-2 text-sn font-senibold text-zinc-200"
            >
              <Library />
              Your library
            </a>
          </nav>

          <nav className="mt-6 pt-6 border-t border-zinc-700 flex flex-col gap-2">
            <a href="" className="text-sn text-zinc-400 hover:text-zinc-100">
              Playlist 1
            </a>
            <a href="" className="text-sn text-zinc-400 hover:text-zinc-100">
              Playlist 2
            </a>
            <a href="" className="text-sn text-zinc-400 hover:text-zinc-100">
              Playlist 3
            </a>
            <a href="" className="text-sn text-zinc-400 hover:text-zinc-100">
              Playlist 4
            </a>
            <a href="" className="text-sn text-zinc-400 hover:text-zinc-100">
              Playlist 5
            </a>
            <a href="" className="text-sn text-zinc-400 hover:text-zinc-100">
              Playlist 6
            </a>
            <a href="" className="text-sn text-zinc-400 hover:text-zinc-100">
              Playlist 7
            </a>
            <a href="" className="text-sn text-zinc-400 hover:text-zinc-100">
              Playlist 8
            </a>
          </nav>
        </aside>
        <main className="flex-1 p-6 ">
          <div className="flex itens-center gap-3">
            <button className="w-6 h-6 rounded-full bg-black/40 ">
              <ChevronLeft />
            </button>
            <button className="w-6 h-6 rounded-full bg-black/40 ">
              <ChevronRight />
            </button>
          </div>
          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <a href="#" className="bg-white/10 rounded hover:bg-white/20">
              playlist
              <strong> normal</strong>
            </a>
            <a href="#" className="bg-white/10 rounded hover:bg-white/20">
              playlist
              <strong> normal</strong>
            </a>
            <a href="#" className="bg-white/10 rounded hover:bg-white/20">
              playlist
              <strong> normal</strong>
            </a>
            <a href="#" className="bg-white/10 rounded hover:bg-white/20">
              playlist
              <strong> normal</strong>
            </a>
            <a href="#" className="bg-white/10 rounded hover:bg-white/20">
              playlist
              <strong> normal</strong>
            </a>
            <a href="#" className="bg-white/10 rounded hover:bg-white/20">
              playlist
              <strong> normal</strong>
            </a>
            <h2>made for aleatóry</h2>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <a href="#" className="bg-white/10 rounded hover:bg-white/20">
              criado por aleatorio
            </a>
            <a href="#" className="bg-white/10 rounded hover:bg-white/20">
              criado por aleatorio
            </a>
            <a href="#" className="bg-white/10 rounded hover:bg-white/20">
              criado por aleatorio
            </a>
            <a href="#" className="bg-white/10 rounded hover:bg-white/20">
              criado por aleatorio
            </a>
            <a href="#" className="bg-white/10 rounded hover:bg-white/20">
              criado por aleatorio
            </a>
            <a href="#" className="bg-white/10 rounded hover:bg-white/20">
              criado por aleatorio
            </a>
            <a href="#" className="bg-white/10 rounded hover:bg-white/20">
              criado por aleatorio
            </a>
            <a href="#" className="bg-white/10 rounded hover:bg-white/20">
              criado por aleatorio
            </a>
            <a href="#" className="bg-white/10 rounded hover:bg-white/20">
              criado por aleatorio
            </a>
            <a href="#" className="bg-white/10 rounded hover:bg-white/20">
              criado por aleatorio
            </a>
            <a href="#" className="bg-white/10 rounded hover:bg-white/20">
              criado por aleatorio
            </a>
            <a href="#" className="bg-white/10 rounded hover:bg-white/20">
              criado por aleatorio
            </a>
            <a href="#" className="bg-white/10 rounded hover:bg-white/20">
              criado por aleatorio
            </a>
            <a href="#" className="bg-white/10 rounded hover:bg-white/20">
              criado por aleatorio
            </a>
            <a href="#" className="bg-white/10 rounded hover:bg-white/20">
              criado por aleatorio
            </a>
            <a href="#" className="bg-white/10 rounded hover:bg-white/20">
              criado por aleatorio
            </a>
            <a href="#" className="bg-white/10 rounded hover:bg-white/20">
              criado por aleatorio
            </a>
            <a href="#" className="bg-white/10 rounded hover:bg-white/20">
              criado por aleatorio
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6 flex itens-center justify-between ">
        <div className="flex flex-col">
          <strong>nome da musica</strong>
          <span> artistas</span>
        </div>
        <div className="flex items-center justify-center gap-3 ml-auto">
          <button>
            <Shuffle />
          </button>
          <button>
            <SkipBack />
          </button>
          <button>
            <Play className="w-10 h-10 flex items-center pl-1 rounded-full bg-green-500" />
          </button>
          <button>
            <SkipForward />
          </button>
          <button>
            <Repeat />
          </button>
        </div>
        <div>
          <span className="text-zinc-400"> 0:31 até</span>
          <span className="text-zinc-400"> 2:20</span>
        </div>

          <div className="flex itens-center h-1 rounded-full w-24 bg-zinc-600 ml-auto ">
            <Volume />
            <div className="flex itens-center h-1 rounded-full w-24 bg-zinc-600">
              
            </div>
            <div >
          </div>
        </div>
      </footer>
    </div>
  );
}
