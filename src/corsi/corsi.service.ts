import { Injectable } from '@nestjs/common';
import { CreateCorsiDto } from './dto/create-corsi.dto';
import { UpdateCorsiDto } from './dto/update-corsi.dto';
import { Corsi } from './entities/corsi.entity';

@Injectable()
export class CorsiService {
  async create(createCorsiDto: CreateCorsiDto): Promise<Corsi> {
    const corsi = new Corsi();
    corsi.name = createCorsiDto.name;
    corsi.durata = createCorsiDto.durata;
    await corsi.save();
    return corsi;
  }

  async findAll(): Promise<Corsi[]> {
    return Corsi.find();
  }

  async findOne(id: number): Promise<Corsi | undefined> {
    return Corsi.findOne({ where: { id: id } });
  }

  async update(id: number, updateCorsiDto: UpdateCorsiDto): Promise<string> {
    const corsi = await Corsi.findOne({ where: { id: id } });

    if (!corsi) {
      throw new Error(`Corsi with ID ${id} not found`);
    }

    corsi.name = updateCorsiDto.name;
    corsi.durata = updateCorsiDto.durata;

    await corsi.save();

    return `Corsi with ID ${id} has been updated`;
  }

  async remove(id: number): Promise<string> {
    const corsi = await Corsi.findOne({ where: { id: id } });

    if (!corsi) {
      throw new Error(`Corsi with ID ${id} not found`);
    }

    await corsi.remove();

    return `Corsi with ID ${id} has been removed`;
  }
}
