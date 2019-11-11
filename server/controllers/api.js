import conf from 'nconf';

export async function ping(req, res, next) {
  res.status(200).json({
    message: 'success',
  });
}
