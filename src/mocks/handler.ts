import {rest} from 'msw';

let id = 16;

const log = [
  {
    content:
      '11989378297139319781893972197832/\n1239812371923871298\n81927312983719238',
    id: 0,
    room: 1,
    user: {profile: {src: '', alt: ''}, nickname: '1'},
    timestamp: '2023-11-28T11:10:43.336225+09:00',
  },
  {
    content:
      '11989378297139319781893972197832/\n1239812371923871298\n81927312983719238',
    id: 1,
    room: 1,
    user: {profile: {src: '', alt: ''}, nickname: '1'},
    timestamp: '2023-11-28T11:10:43.336225+09:00',
  },
  {
    content:
      '11989378297139319781893972197832/\n1239812371923871298\n81927312983719238',
    id: 2,
    room: 1,
    user: {profile: {src: '', alt: ''}, nickname: '1'},
    timestamp: '2023-11-28T11:10:43.336225+09:00',
  },
  {
    content:
      '11989378297139319781893972197832/\n1239812371923871298\n81927312983719238',
    id: 3,
    room: 1,
    user: {profile: {src: '', alt: ''}, nickname: '1'},
    timestamp: '2023-11-28T11:10:43.336225+09:00',
  },
  {
    content:
      '11989378297139319781893972197832/\n1239812371923871298\n81927312983719238',
    id: 4,
    room: 1,
    user: {profile: {src: '', alt: ''}, nickname: '1'},
    timestamp: '2023-11-28T11:10:43.336225+09:00',
  },
  {
    content:
      '11989378297139319781893972197832/\n1239812371923871298\n81927312983719238',
    id: 5,
    room: 1,
    user: {profile: {src: '', alt: ''}, nickname: '1'},
    timestamp: '2023-11-28T11:10:43.336225+09:00',
  },
  {
    content:
      '11989378297139319781893972197832/\n1239812371923871298\n81927312983719238',
    id: 6,
    room: 1,
    user: {profile: {src: '', alt: ''}, nickname: '1'},
    timestamp: '2023-11-28T11:10:43.336225+09:00',
  },
  {
    content:
      '11989378297139319781893972197832/\n1239812371923871298\n81927312983719238',
    id: 7,
    room: 1,
    user: {profile: {src: '', alt: ''}, nickname: '1'},
    timestamp: '2023-11-28T11:10:43.336225+09:00',
  },
  {
    content:
      '11989378297139319781893972197832/\n1239812371923871298\n81927312983719238',
    id: 8,
    room: 1,
    user: {profile: {src: '', alt: ''}, nickname: '1'},
    timestamp: '2023-11-28T11:10:43.336225+09:00',
  },
  {
    content:
      '11989378297139319781893972197832/\n1239812371923871298\n81927312983719238',
    id: 9,
    room: 1,
    user: {profile: {src: '', alt: ''}, nickname: '1'},
    timestamp: '2023-11-28T11:10:43.336225+09:00',
  },
  {
    content:
      '11989378297139319781893972197832/\n1239812371923871298\n81927312983719238',
    id: 10,
    room: 1,
    user: {profile: {src: '', alt: ''}, nickname: '1'},
    timestamp: '2023-11-28T11:10:43.336225+09:00',
  },
  {
    content:
      '11989378297139319781893972197832/\n1239812371923871298\n81927312983719238',
    id: 11,
    room: 1,
    user: {profile: {src: '', alt: ''}, nickname: '1'},
    timestamp: '2023-11-28T11:10:43.336225+09:00',
  },
  {
    content:
      '11989378297139319781893972197832/\n1239812371923871298\n81927312983719238',
    id: 12,
    room: 1,
    user: {profile: {src: '', alt: ''}, nickname: '1'},
    timestamp: '2023-11-28T11:10:43.336225+09:00',
  },
  {
    content:
      '11989378297139319781893972197832/\n1239812371923871298\n81927312983719238',
    id: 13,
    room: 1,
    user: {profile: {src: '', alt: ''}, nickname: '1'},
    timestamp: '2023-11-28T11:10:43.336225+09:00',
  },
  {
    content:
      '11989378297139319781893972197832/\n1239812371923871298\n81927312983719238',
    id: 14,
    room: 1,
    user: {profile: {src: '', alt: ''}, nickname: '1'},
    timestamp: '2023-11-28T11:10:43.336225+09:00',
  },
  {
    content:
      '11989378297139319781893972197832/\n1239812371923871298\n81927312983719238',
    id: 15,
    room: 1,
    user: {profile: {src: '', alt: ''}, nickname: '1'},
    timestamp: '2023-11-28T11:10:43.336225+09:00',
  },
];

export const handlers = [
  rest.get('/log/room=:room/', async (req, res, ctx) => {
    const {room} = req.params;

    if (typeof room !== 'string') {
      return res(ctx.status(400), ctx.json({error: 'Invalid room'}));
    }

    const roomId = parseInt(room);
    const selectedLogs = log
      .filter(entry => entry.room === roomId)
      .sort((a, b) => b.id - a.id) // Sort by 'id' in descending order
      .slice(0, 5)
      .reverse(); // Get the first 5 logs after sorting

    sleep(200);
    return res(ctx.status(200), ctx.json(selectedLogs));
  }),

  rest.get('/log/room=:room/:id', async (req, res, ctx) => {
    const {room, id} = req.params;

    // Check if 'room' and 'id' are strings and not arrays
    if (typeof room !== 'string' || typeof id !== 'string') {
      return res(
        ctx.status(400),
        ctx.json({error: 'Invalid room or id format'}),
      );
    }

    const roomId = parseInt(room);
    const logId = parseInt(id);

    // Find the logs for the specific room with id less than or equal to the provided id
    const selectedLogs = log.filter(
      entry =>
        entry.room === roomId && entry.id < logId && entry.id >= logId - 6,
    );

    sleep(200);
    return res(ctx.status(200), ctx.json(selectedLogs));
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
