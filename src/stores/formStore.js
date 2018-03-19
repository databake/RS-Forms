import { observable, action, runInAction } from 'mobx'
import MockTemplate from '../../data/MockNationalExpress.json'
import SectionModel from './SectionModel'

export default class ObservableFormStore {
  @observable sections = []
  @observable fetchingData
  @observable activationResponse
  @observable error

  constructor () {
    MockTemplate.map(section => {
      this.sections.push(new SectionModel({ ...section }))
    })
  }

  @action('update a field value')
  update (fieldId, value) {
    this.sections.map(section => {
      section.fields.map(field => {
        if (field.id === fieldId) {
          field.value = value
        }
      })
    })
  }

  fetchFromVFA = async () => {
    const url = 'https://donson.mockable.io/takeCharge/1549/99/'
    try {
      const response = await fetch(url, {
        method: 'post'
      })
      return await response.json()
    } catch (err) {
      console.log('err', err)
      this.error = err
    }
  }

  @action('call the VFA APi')
  activate = async () => {
    this.fetchingData = true
    const result = await this.fetchFromVFA()
    runInAction('update state after fetching VFA data', () => {
      console.log('response', result)
      this.fetchingData = false
      this.activationResponse = result
    })
  }
}
