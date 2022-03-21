import {Client} from "../client/client";
import {Master} from "../master/master";
import {Favour} from "../favour/favour";

export class Record {
  id: string;
  client: Client;
  master: Master;
  favour: Favour;
  dateStart: Date;
  dateEnd: Date;
}
