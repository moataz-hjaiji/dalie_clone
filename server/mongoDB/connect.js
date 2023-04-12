import mongoose from 'mongoose';

const connectDB = async (url) => {
  mongoose.set('strictQuery', true); // help us on search

  mongoose
    .connect(url)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));
};

export default connectDB