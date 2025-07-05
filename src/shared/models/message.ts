import { ContentChunk } from '@mistralai/mistralai/models/components/contentchunk';

export interface Message {
  role: 'user' | 'AI' | 'system';
  content: string | ContentChunk[] | undefined;
  date: Date;
}
