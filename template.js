module.exports = function (scope) {
  return {
    package: {
      dependencies: {
        '@strapi/provider-email-sendgrid': scope.strapiVersion,
        '@strapi/provider-upload-aws-s3': scope.strapiVersion,
        'pg-connection-string': '^2.5.0',
      },
    },
    scripts: {
      dev: 'strapi develop'
    }
  };
};
