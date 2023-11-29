import {rest} from 'msw';

let id = 16;

const log = [
  {
    content: '123',
    id: 0,
    room: 1,
    user: {profile: {src: '', alt: ''}, nickname: '1'},
    timestamp: '2023-11-28T11:10:43.336225+09:00',
  },
  {
    content: '123',
    id: 1,
    room: 1,
    user: {profile: {src: '', alt: ''}, nickname: '1'},
    timestamp: '2023-11-28T11:10:43.336225+09:00',
  },
  {
    content: '123',
    id: 2,
    room: 1,
    user: {profile: {src: '', alt: ''}, nickname: '1'},
    timestamp: '2023-11-28T11:10:43.336225+09:00',
  },
  {
    content: '123',
    id: 3,
    room: 1,
    user: {profile: {src: '', alt: ''}, nickname: '1'},
    timestamp: '2023-11-28T11:10:43.336225+09:00',
  },
  {
    content: '123',
    id: 4,
    room: 1,
    user: {profile: {src: '', alt: ''}, nickname: '1'},
    timestamp: '2023-11-28T11:10:43.336225+09:00',
  },
  {
    content: '123',
    id: 5,
    room: 1,
    user: {profile: {src: '', alt: ''}, nickname: '1'},
    timestamp: '2023-11-28T11:10:43.336225+09:00',
  },
  {
    content: '123',
    id: 6,
    room: 1,
    user: {profile: {src: '', alt: ''}, nickname: '1'},
    timestamp: '2023-11-28T11:10:43.336225+09:00',
  },
  {
    content: '123',
    id: 7,
    room: 1,
    user: {profile: {src: '', alt: ''}, nickname: '1'},
    timestamp: '2023-11-28T11:10:43.336225+09:00',
  },
  {
    content: '123',
    id: 8,
    room: 1,
    user: {profile: {src: '', alt: ''}, nickname: '1'},
    timestamp: '2023-11-28T11:10:43.336225+09:00',
  },
  {
    content: '123',
    id: 9,
    room: 1,
    user: {profile: {src: '', alt: ''}, nickname: '1'},
    timestamp: '2023-11-28T11:10:43.336225+09:00',
  },
  {
    content: '123',
    id: 10,
    room: 1,
    user: {profile: {src: '', alt: ''}, nickname: '1'},
    timestamp: '2023-11-28T11:10:43.336225+09:00',
  },
  {
    content: '123',
    id: 11,
    room: 1,
    user: {profile: {src: '', alt: ''}, nickname: '1'},
    timestamp: '2023-11-28T11:10:43.336225+09:00',
  },
  {
    content: '123',
    id: 12,
    room: 1,
    user: {profile: {src: '', alt: ''}, nickname: '1'},
    timestamp: '2023-11-28T11:10:43.336225+09:00',
  },
  {
    content: '123',
    id: 13,
    room: 1,
    user: {profile: {src: '', alt: ''}, nickname: '1'},
    timestamp: '2023-11-28T11:10:43.336225+09:00',
  },
  {
    content: '123',
    id: 14,
    room: 1,
    user: {profile: {src: '', alt: ''}, nickname: '1'},
    timestamp: '2023-11-28T11:10:43.336225+09:00',
  },
  {
    content: '123',
    id: 15,
    room: 1,
    user: {profile: {src: '', alt: ''}, nickname: '1'},
    timestamp: '2023-11-28T11:10:43.336225+09:00',
  },
];

export const handlers = [
  rest.get('/log/:id', async (req, res, ctx) => {
    const idParam = req.params.id;

    // Check if 'idParam' is a string and not an array
    if (typeof idParam !== 'string') {
      return res(ctx.status(400), ctx.json({error: 'Invalid id format'}));
    }

    const id = parseInt(idParam);

    // Find the logs with id less than or equal to the provided id
    const selectedLogs = log.filter(entry => entry.id <= id + 5);

    // If you want to limit the number of logs returned
    const limitedLogs = selectedLogs.slice(-5); // Get the last 5 logs

    sleep(200);
    return res(ctx.status(200), ctx.json(limitedLogs));
  }),

  rest.post('/log', async (req, res, ctx) => {
    sleep(200);
    log.push({
      content: '1',
      id: id,
      room: 1,
      user: {profile: {src: '', alt: ''}, nickname: '1'},
      timestamp: '2023-11-28T11:10:43.336225+09:00',
    });

    id = id + 1;

    return res(ctx.status(201), ctx.json(log));
  }),
];

async function sleep(timeout: number) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}
