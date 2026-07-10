import type { VoiceOption } from './types';

/**
 * Curated subset of Kokoro-82M voices, shared by the Kokoro.js and HeadTTS
 * adapters (both run the same model). The list is static so a section can show
 * its voices without downloading the ~90 MB model. `id` is the Kokoro voice key;
 * grades are from the model card. Full catalog: onnx-community/Kokoro-82M-v1.0-ONNX.
 */
export const KOKORO_VOICES: VoiceOption[] = [
  { id: 'af_heart', label: 'Heart — US female (A)', lang: 'en-US' },
  { id: 'af_bella', label: 'Bella — US female (A-)', lang: 'en-US' },
  { id: 'af_nicole', label: 'Nicole — US female (B-)', lang: 'en-US' },
  { id: 'af_aoede', label: 'Aoede — US female (C+)', lang: 'en-US' },
  { id: 'am_fenrir', label: 'Fenrir — US male (C+)', lang: 'en-US' },
  { id: 'am_michael', label: 'Michael — US male (C+)', lang: 'en-US' },
  { id: 'am_puck', label: 'Puck — US male (C+)', lang: 'en-US' },
  { id: 'bf_emma', label: 'Emma — GB female (B-)', lang: 'en-GB' },
  { id: 'bm_fable', label: 'Fable — GB male (C)', lang: 'en-GB' },
  { id: 'bm_george', label: 'George — GB male (C)', lang: 'en-GB' },
];
