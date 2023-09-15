import { Separator } from './ui/separator';
import { FileVideo, Upload } from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { ChangeEvent } from 'react';

export function VideoFormInput() {
  function handleFileSelected(event: ChangeEvent<HTMLInputElement></HTMLInputElement>) {

  }

  return (
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
        onChange={handleFileSelected}
      />

      <Separator />

      <div className="space-y-1">
        <label htmlFor="transcription_prompt">Prompt de transcricao</label>
        <Textarea
          placeholder="Inclue palavras-chaves separadas por virgulas"
          id="transcription_prompt"
          className="min-h-20 leading-relaxed h-20"
        />
      </div>

      <Button type="submit" className="w-full">
        Carregar Video
        <Upload className="w-4 h-4 ml-4" />
      </Button>
    </form>
  );
}
