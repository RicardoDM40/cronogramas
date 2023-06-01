import Unidade from "../databases/models/unidade"
import { AppDataSource } from "../databases/connections/data-source"
import { type } from "os"

const cursor = AppDataSource.getRepository(Unidade)

type newUnidadeRequest = {
    fk_curso: string
    descricao_unidade: string
    carga_horaria_unidade: number
    ordem: number
}

type findOneUnidadeRequest = {
    id_unidade: string
  }

export class CreateUnidadeService {
    async execute({
        fk_curso,
        descricao_unidade,
        carga_horaria_unidade,
        ordem,
    }: newUnidadeRequest): Promise < Unidade | Error > {
        if (await cursor.findOne({where:{descricao_unidade}})){
            return new Error("turma já existe!")
        }
        const unidade = cursor.create({
            fk_curso,
            descricao_unidade,
            carga_horaria_unidade,
            ordem,
        }) 
        
        await cursor.save(unidade)
        return unidade
    }
}

export class ReadAllUnidadeService {
    async execute() {
        const unidades = await cursor.find()
        return unidades
      }
}

export class ReadOneUnidadeService {
    async execute({ id_unidade }: findOneUnidadeRequest) {
        const unidade = await cursor.findOne({ where: { id_unidade } })
        if (!unidade) {
          return new Error("Unidade não encontrada!")
        }
        return unidade
      }
}

export class UpdateCursoService {}

export class DeleteUnidadeService {
    async execute({ id_unidade }: findOneUnidadeRequest) {
        const unidade = await cursor.findOne({ where: { id_unidade } })
        if (!unidade) {
          return new Error("Unidade não encontrada!")
        }
        await cursor.delete(unidade)
        return unidade
      }
}
