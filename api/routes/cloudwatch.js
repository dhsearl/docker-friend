const awsCreds = require('../awsCredentials')

import {throwError} from '../errorSockets'
import Bounce from 'bounce'

/**
  Just get creds from something else, and perform queries here using those current creds
**/
module.exports = [{
    method: 'GET',
    path: '/clusters/{clusterName}',
    handler: (request, reply) => {
      console.log(request.params)
      reply()
    }
  }
]
