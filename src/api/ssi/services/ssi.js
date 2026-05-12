'use strict';

/**
 * ssi service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ssi.ssi');
