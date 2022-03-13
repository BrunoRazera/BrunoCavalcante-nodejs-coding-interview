import { FlightsModel } from '../models/flights.model'
import { Person } from '../models/persons.model'

export class FlightsService {
    async getAll() {
        return FlightsModel.find()
    }

    async addPassenger(code: String, personEmail: String) {
        return FlightsModel.updateOne({ code }, {$addToSet: { pessenger: personEmail }})
    }
}
