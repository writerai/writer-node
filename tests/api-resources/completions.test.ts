// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import WriterAI from 'writerai';
import { Response } from 'node-fetch';

const writerAI = new WriterAI({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource completions', () => {
  test('create: only required params', async () => {
    const responsePromise = writerAI.completions.create({ model: 'string', prompt: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await writerAI.completions.create({
      model: 'string',
      prompt: 'string',
      best_of: 0,
      max_tokens: 0,
      random_seed: 0,
      stop: ['string', 'string', 'string'],
      stream: false,
      temperature: 0,
      top_p: 0,
    });
  });
});