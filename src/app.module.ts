import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesModule } from './module/articles/articles.module';
import { UsersModule } from './module/users/users.module';
import { BalancesModule } from './module/balances/balances.module';
import { BanksModule } from './module/banks/banks.module';
import { ActivitiesModule } from './module/activities/activities.module';
import { TransactionsModule } from './module/transactions/transactions.module';

@Module({
  imports: [
    ArticlesModule,
    UsersModule,
    BalancesModule,
    BanksModule,
    ActivitiesModule,
    TransactionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
