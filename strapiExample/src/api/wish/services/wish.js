'use strict';

/**
 * wish service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::wish.wish');
