import { Controller, Get } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { SortDirection } from 'src/global/Interfaces/query.enum';
import { ChartsService } from './charts.service';

@Controller('charts')
export class ChartsController {

    constructor(private chart: ChartsService) { }

    @ApiProperty()
    @Get("cumulative")

    getChartData() {
        return this.chart.findAll("2020-10-01", "2020-10-01", SortDirection.ASC);
    }

}
