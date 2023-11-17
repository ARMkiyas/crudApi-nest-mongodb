// item.seeder.ts
import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemSeeder implements OnApplicationBootstrap {
    constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) { }

    async onApplicationBootstrap() {
        await this.seed();
    }

    private async seed() {
        try {
            // Check if there are any items in the database
            const itemsCount = await this.itemModel.countDocuments().exec();

            if (itemsCount === 0) {
                // If no items exist, seed the database with some initial data
                const initialItems = [
                    { name: 'Item 1', qty: 10, description: 'Description for Item 1' },
                    { name: 'Item 2', qty: 5, description: 'Description for Item 2' },
                ];

                // Insert the initial items into the database
                await this.itemModel.create(initialItems);

                console.log('Database seeded with initial items.');
            } else {
                console.log('Database already contains items. Skipping seeding.');
            }
        } catch (error) {
            console.error('Error seeding database:', error);
        }
    }
}