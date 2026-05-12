'use strict';

/**
 * oem service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::oem.oem');
