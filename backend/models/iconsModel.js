import mongoose from 'mongoose';

const iconsSchema = mongoose.Schema({
  icons: {}
});

const iconsModel = mongoose.model('iconsModel', iconsSchema);

export default iconsModel;