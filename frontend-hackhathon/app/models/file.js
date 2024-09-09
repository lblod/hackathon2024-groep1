import Model, { attr } from '@ember-data/model';
import ENV from 'frontend-hackathon/config/environment';

export default class FileModel extends Model {
  @attr('string') name;
  @attr('string') format;
  @attr('number') size;
  @attr('string') extension;
  @attr('iso-date') created;
  @attr('iso-date') modified;
  @attr('string') status;
}
