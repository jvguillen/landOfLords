# LandOfLords

## Requirements
nodejs
sequelize-cli (installed globally)

## Bootstrap

run `sequelize init`. This will initialize the project and generate the config and file structure for models, migrations,
and seeders.

## How to create models
Run `sequelize model:create --name <model-name> --attributes '<attr1:data-type>, <attr2:data-type>'`
For more details run `sequelize help:model:create`

This will create a model and a migration for the generated model.

# How-to run migrations

run `sequelize db:migrate`

The migrations history is saved in _sequelize-meta.json_

# How-to run Seeders

run `sequelize seed:create --name <seeder-name>`
run `sequelize db:seed:all` to run all seeders
run `sequelize db:seed --seed <seeder-id>` to run a specific seeder