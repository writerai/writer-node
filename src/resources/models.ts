// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'writerai/core';
import { APIResource } from 'writerai/resource';
import * as ModelsAPI from 'writerai/resources/models';

export class Models extends APIResource {
  /**
   * List the available models
   */
  list(options?: Core.RequestOptions): Core.APIPromise<ModelListResponse> {
    return this._client.get('/v1/models', options);
  }
}

export interface ModelListResponse {
  models: Array<ModelListResponse.Model>;
}

export namespace ModelListResponse {
  export interface Model {
    id: string;

    name: string;
  }
}

export namespace Models {
  export import ModelListResponse = ModelsAPI.ModelListResponse;
}