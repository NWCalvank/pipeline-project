import dotenv from 'dotenv';

dotenv.config();

export default function(req, res) {
  res.status(200).send({ message: 'Hello World!' });
}
