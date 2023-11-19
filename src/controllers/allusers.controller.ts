import {inject} from '@loopback/core';
import {
  Request,
  ResponseObject,
  RestBindings,
  get,
  response,
} from '@loopback/rest';

/**
 * OpenAPI response for allusers()
 */
const ALLUSERS_RESPONSE: ResponseObject = {
  description: 'All Users Response',
  content: {
    'application/json': {
      schema: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            id: {type: 'number'},
            name: {type: 'string'},
          },
        },
      },
    },
  },
};

/**
 * A simple controller to bounce back http requests
 */
export class AllusersController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request) { }

  @get('/allusers')
  @response(200, ALLUSERS_RESPONSE)
  allusers(): object[] {
    const users: object[] = [
      {id: 801311172, name: 'Shanmukh Gorle'},
      {id: 2, name: 'User 2'},
    ];

    return users;
  }
}
