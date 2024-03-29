import { Schema, model } from 'mongoose';

const HomeSchema = new Schema({
  title: { type: String, required: true },
  description: String,
});

const HomeModel = model('Home', HomeSchema);

export default HomeModel;
