import { MigrationInterface, QueryRunner } from "typeorm";

export class InitDatabase1784330161165 implements MigrationInterface {
    name = 'InitDatabase1784330161165'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "board" ("id" SERIAL NOT NULL, "nom" character varying(100) NOT NULL, "prenom" character varying(100) NOT NULL, "sexe" character varying(20) NOT NULL, "email" character varying(150) NOT NULL, "telephone" character varying(20) NOT NULL, "profession" character varying(100) NOT NULL, "motivation" text NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_865a0f2e22c140d261b1df80eb1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_b5e3c728dff0aaa00828a1c510" ON "board" ("email") `);
        await queryRunner.query(`CREATE TYPE "public"."agents_sexe_enum" AS ENUM('Homme', 'Femme')`);
        await queryRunner.query(`CREATE TYPE "public"."agents_statut_enum" AS ENUM('Célibataire', 'Marié(e)', 'Divorcé(e)', 'Veuf(ve)')`);
        await queryRunner.query(`CREATE TABLE "agents" ("id" SERIAL NOT NULL, "agentId" character varying(20) NOT NULL, "promoCode" character varying(30) NOT NULL, "nom" character varying(100) NOT NULL, "prenom" character varying(100) NOT NULL, "sexe" "public"."agents_sexe_enum" NOT NULL, "statut" "public"."agents_statut_enum" NOT NULL, "nifCin" character varying(25) NOT NULL, "email" character varying(150) NOT NULL, "telephone" character varying(20) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_9c653f28ae19c5884d5baf6a1d9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_49c61d9abe4282f87c1593c0d0" ON "agents" ("agentId") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_90a15a9d56c5bc466ef0953227" ON "agents" ("promoCode") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_9f731f91b53ceb49e936c41807" ON "agents" ("nifCin") `);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_5fdef501c63984b1b98abb1e68" ON "agents" ("email") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_5fdef501c63984b1b98abb1e68"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9f731f91b53ceb49e936c41807"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_90a15a9d56c5bc466ef0953227"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_49c61d9abe4282f87c1593c0d0"`);
        await queryRunner.query(`DROP TABLE "agents"`);
        await queryRunner.query(`DROP TYPE "public"."agents_statut_enum"`);
        await queryRunner.query(`DROP TYPE "public"."agents_sexe_enum"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b5e3c728dff0aaa00828a1c510"`);
        await queryRunner.query(`DROP TABLE "board"`);
    }

}
