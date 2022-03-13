import { JsonController, Get, Put, Body, Param } from 'routing-controllers'
import { FlightsService } from '../services/flights.service'
import { Person } from '../models/persons.model'

const flightsService = new FlightsService()

@JsonController('/flights')
export default class FlightsController {
    @Get('', { transformResponse: false })
    async getAll() {
        return {
            data: await flightsService.getAll()
        }
    }

    @Put('/:code/addPassenger', { transformResponse: false })
    async addPassengers(@Body() passenger: Person, @Param('code') code: String) {
        return {
            data: await flightsService.addPassenger(code, passenger.email)
        }
    }
}
