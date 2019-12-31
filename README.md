# next-data

Example project that uses Node.js and Next.js (a React framework) to display data.

Based on tutorial [Create a Next.js App with a MySQL Database That Builds and Deploys with ZEIT Now](https://zeit.co/guides/deploying-next-and-mysql-with-now) running at at <https://next-mysql.now.sh>.

- Serverless app hosting with [Zeit Now](https://zeit.co/).
- MySQL data hosted with [Google Cloud SQL](https://cloud.google.com/sql/).

## Links

- [Demo](https://next-data.now.sh)
- [Source](https://github.com/denisecase/next-data)

## Database

For storage, it uses a Google Cloud Project (GCP) SQL (MySQL) data source.

To make your own, go to [GCP](https://cloud.google.com/gcp).
Create a project (e.g, next-project), then create SQL instance.

Click Users to view or edit user accounts for your instance.
Once you have your remote MySQL database setup, note your credentials:

```bash
Database name
Database hostname
Database username
Database password
```

Example:

```bash
now secrets add MYSQL_HOST 35.192.190.131
now secrets add MYSQL_DATABASE demodb
now secrets add MYSQL_USER default-user
now secrets add MYSQL_PASSWORD some-password
```

Secrets are added with the name / value pairs. For more information, see <https://zeit.co/docs/v2/environment-variables-and-secrets>.

## Authorize App

By default, the Google Cloud SQL public IP address is blocked for all addresses.
Use [Authorized networks](https://cloud.google.com/sql/docs/mysql/instance-settings#authorized-networks-2ndgen) to enable access.

## Resource

This offers read-only access to one resource, a profile with the following fields:

- address string
- avatar string
- email string
- id number
- name string

## Initialize Data

Connect to the instance from the integrated terminal in GCP.

```gcloud
gcloud sql connect mysql-next-demo --user=root
```

Enter the password to get a mysql prompt. Enter the following commands.

```SQL
CREATE DATABASE demodb;
USE demodb;
DROP TABLE IF EXISTS `profiles`;
CREATE TABLE `profiles` (`address` VARCHAR(255), `avatar` VARCHAR(255), `email` VARCHAR(255), `id` VARCHAR(255), `name` VARCHAR(255), PRIMARY KEY (`id`)) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

INSERT INTO `profiles` (`address`, `avatar`, `email`, `id`, `name`) values ("address", "avatar", "email", "1", "name");
INSERT INTO `profiles` (`address`, `avatar`, `email`, `id`, `name`) values ("address", "avatar", "email", "2", "name");
INSERT INTO `profiles` (`address`, `avatar`, `email`, `id`, `name`) values ("address", "avatar", "email", "3", "name");

SELECT * from profiles;

```

## Prerequisites

Install latest LTS version of [Node.js](https://nodejs.org/en/download/).

Install the Zeit now globally:

```Powershell
npm i -g now
```

Open Powershell or Bash and run `npm install'.

## Easy Deployment

Open Powershell or Bash and run `now`.

## Additional References

- [Convert SQL to JSON](https://www.csvjson.com/sql2json)
- [Learn Next.js](https://nextjs.org/learn/basics/getting-started)
