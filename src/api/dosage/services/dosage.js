'use strict';

/**
 * dosage service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dosage.dosage');
