import { Moon, Sun, Github, FileVideo } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';

export function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  function toggleTheme() {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
      localStorage.theme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
      localStorage.theme = 'dark';
    }
  }
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex justify-between items-center p-3 border-b">
        <h1 className="text-xl font-bold">upload.ai</h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            desenvolvido com 💜
          </span>

          <Separator orientation="vertical" className="h-8" />

          <Button variant="outline">
            <Github className="w-4 h-4" />
          </Button>

          <Button
            title="Tema"
            variant="outline"
            className="flex w-10 p-0"
            onClick={toggleTheme}
          >
            {isDarkMode ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea
              placeholder="Inclua o prompt para a IA"
              className="p-5 leading-relaxed resize-none"
            />
            <Textarea
              placeholder="Resultado gerado pela a IA"
              className="p-5 leading-relaxed resize-none"
            />
          </div>

          <p className="text-sm text-muted-foreground">
            Lembre-se: voce pode utilizar a variavel{' '}
            <code className="text-violet-400">{'{transcription}'}</code> no seu
            prompt para adicionar
          </p>
        </div>

        <aside className="w-80 space-y-6">
          <form action="" className="space-y-6">
            <label
              htmlFor="video"
              className="cursor-pointer flex flex-col text-sm border border-dashed roude aspect-video items-center gap-2 justify-center text-muted-foreground hover:bg-gray-100"
            >
              <FileVideo className="w-4 h-4" />
              Carregar video
            </label>
            <input
              type="file"
              id="video"
              accept="video/mp4"
              className="sr-only"
            />

            <Separator />

            <div className="space-y-1">
              <label htmlFor="transcription_prompt">
                Prompt de transcricao
              </label>
              <Textarea
                placeholder="Inclue palavras-chaves separadas por virgulas"
                id="transcription_prompt"
                className="min-h-20 leading-relaxed"
              />
            </div>

            <Button>Carregar Video</Button>
          </form>
        </aside>
      </main>
    </div>
  );
}
