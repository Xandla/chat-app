const { addMessage, getMessages } = require("../controllers/messageController");
const Messages = require("../models/messageModel");

describe("Message Controller, test addMessage()", () => {
    it('should add a message successfully and return the success message', async () => {
        const req = {
            body: {
                from: 'senderId',
                to: 'receiverId',
                message: 'Hello, World!'
            }
        };
        const res = {
            json: jest.fn().mockReturnValueOnce({ msg: 'Message added successfully.' })
        };

        Messages.create = jest.fn().mockResolvedValueOnce({ _id: 'messageId' });

        await addMessage(req, res);

        expect(Messages.create).toHaveBeenCalledWith({
            message: { text: 'Hello, World!' },
            users: ['senderId', 'receiverId'],
            sender: 'senderId'
        });
        expect(res.json).toHaveBeenCalledWith({ msg: 'Message added successfully.' });
    });

    it('should return the failure message when message creation fails', async () => {
        const req = {
            body: {
                from: 'senderId',
                to: 'receiverId',
                message: 'Hello, World!'
            }
        };
        const res = {
            json: jest.fn().mockReturnValueOnce({ msg: 'Failed to add message to the database' })
        };

        Messages.create = jest.fn().mockResolvedValueOnce(null);

        await addMessage(req, res);

        expect(Messages.create).toHaveBeenCalledWith({
            message: { text: 'Hello, World!' },
            users: ['senderId', 'receiverId'],
            sender: 'senderId'
        });
        expect(res.json).toHaveBeenCalledWith({ msg: 'Failed to add message to the database' });
    });

    it('should call the next middleware when an exception occurs', async () => {
        const req = {
            body: {
                from: 'senderId',
                to: 'receiverId',
                message: 'Hello, World!'
            }
        };
        const res = {
            json: jest.fn()
        };
        const next = jest.fn();

        Messages.create = jest.fn().mockRejectedValueOnce(new Error('Some error'));

        await addMessage(req, res, next);

        expect(Messages.create).toHaveBeenCalledWith({
            message: { text: 'Hello, World!' },
            users: ['senderId', 'receiverId'],
            sender: 'senderId'
        });
        expect(next).toHaveBeenCalledWith(new Error('Some error'));
    });
});
