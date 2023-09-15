import { Moon, Sun, Github, Wand2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Slider } from './components/ui/slider';
import { VideoFormInput } from './components/video-input-form';

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
          <VideoFormInput />

          <Separator />

          <form className="space-y-6">
            <div className="space-y-2">
              <Label>Prompt</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um Prompt" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={'title'}>Título do Youtube</SelectItem>
                  <SelectItem value={'description'}>
                    Descrição do Youtube
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Select</Label>
              <Select disabled defaultValue="gpt-3.5">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={'gpt-3.5'}>GPT 3.5-turbo 16k</SelectItem>
                </SelectContent>
              </Select>
              <span className="block text-sm text-muted-foreground italic ml-1">
                Você poderá customizar essa opção em breve...
              </span>
            </div>

            <Separator />

            <div className="space-y-4">
              <Label>Temperatura</Label>

              <Slider defaultValue={[33]} max={100} step={1} />

              <span className="block text-sm text-muted-foreground italic ml-1 leading-relaxed">
                Valores mais altos tendem a deixar o resultado mais criativo e
                com possíveis erros..
              </span>
            </div>
            <Separator />

            <Button className="w-full">
              Executar
              <Wand2 className="w-4 h-4 ml-4" />
            </Button>
          </form>
        </aside>
      </main>
    </div>
  );
}
