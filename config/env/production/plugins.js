// config/plugins.js

module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: env("SENDGRID_EMAIL_FROM"),
        defaultReplyTo: env("SENDGRID_EMAIL_TO"),
      },
    },
  },

  backup: {
    enabled: true,
    config: {
      // ✅ Morning + Evening
      //cronSchedule: env("BACKUP_CRON", "0 8,20 * * *"),
      //cronSchedule: "0 8,20 * * *",
      cronSchedule: env("BACKUP_CRON") || "0 8,20 * * *",

      // ✅ AWS S3
      storageService: env("BACKUP_STORAGE", "aws-s3"),
      awsAccessKeyId: env("AWS_ACCESS_KEY_ID"),
      awsSecretAccessKey: env("AWS_SECRET_ACCESS_KEY"),
      awsRegion: env("AWS_REGION"),
      awsS3Bucket: env("AWS_S3_BUCKET"),

      // ✅ MariaDB uses mysql driver for dump
      databaseDriver: env("DATABASE_CLIENT", "mysql"),
      mysqldumpExecutable: env("MYSQLDUMP_PATH", "/usr/bin/mysqldump"),

      // ✅ Keep backups 10 days + cleanup daily 3AM
      allowCleanup: env.bool("BACKUP_ALLOW_CLEANUP", true),
      timeToKeepBackupsInSeconds: env.int("BACKUP_KEEP_SECONDS", 864000),
      cleanupCronSchedule: env("BACKUP_CLEANUP_CRON", "0 3 * * *"),

      errorHandler: (error, strapi) => {
        strapi.log.error("Backup plugin error:", error);
      },
    },
  },
});
