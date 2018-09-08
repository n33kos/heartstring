import AudioBuffer from '../audioBuffer/index';
import Level       from '../index';
import Note        from '../note/index';
import NoteTrigger from '../noteTrigger/index';
import Section     from '../section/index';

export default args => {
  const level = new Level(args);

  const notes = [
    new Note({
      audioContext    : level.audioContext,
      color           : 'yellow',
      masterAudioNode : level.masterAudioNode,
      radius          : level.radius,
      url             : 'level-1/note-1.mp3',
    }),
    new Note({
      audioContext    : level.audioContext,
      color           : 'green',
      masterAudioNode : level.masterAudioNode,
      radius          : level.radius,
      url             : 'level-1/note-2.mp3',
    }),
    new Note({
      audioContext    : level.audioContext,
      color           : 'blue',
      masterAudioNode : level.masterAudioNode,
      radius          : level.radius,
      url             : 'level-1/note-3.mp3',
    }),
    new Note({
      audioContext    : level.audioContext,
      color           : 'indigo',
      masterAudioNode : level.masterAudioNode,
      radius          : level.radius,
      url             : 'level-1/note-4.mp3',
    }),
  ];

  level.bpm = 110;
  level.sections = [
    new Section({
      audioContext : level.audioContext,
      beats : 32,
      beatCounter : 32,
      bpm : level.bpm,
      masterAudioNode : level.masterAudioNode,
      unlockPattern : [1, 2, 3, 0],
      url : 'level-1/bg-1.mp3',
      notes,
      noteTriggers : [
        new NoteTrigger({
          beats          : 8,
          beatCounter    : 0,
          masterAudioNode: level.masterAudioNode,
          position       : -Math.PI*0.5,
          radius         : level.radius,
          startDelay     : 0,
        }),
      ],
    }),
    new Section({
      audioContext : level.audioContext,
      beats : 32,
      beatCounter : 32,
      bpm : level.bpm,
      masterAudioNode : level.masterAudioNode,
      unlockPattern : [3, 0, 2, 1],
      url : 'level-1/bg-2.mp3',
      notes,
      noteTriggers : [
        new NoteTrigger({
          beats          : 8,
          beatCounter    : 0,
          masterAudioNode: level.masterAudioNode,
          position       : Math.PI,
          radius         : level.radius,
          startDelay     : 0,
        }),
      ],
    }),
    new Section({
      audioContext : level.audioContext,
      beats : 32,
      beatCounter : 32,
      bpm : level.bpm,
      masterAudioNode : level.masterAudioNode,
      unlockPattern : [1, 0, 2, 3],
      url : 'level-1/bg-3.mp3',
      notes,
      noteTriggers : [
        new NoteTrigger({
          beats          : 8,
          beatCounter    : 0,
          masterAudioNode: level.masterAudioNode,
          position       : -Math.PI*0.5,
          radius         : level.radius,
          startDelay     : 0,
        }),
      ],
    }),
    new Section({
      audioContext : level.audioContext,
      beats : 32,
      beatCounter : 32,
      bpm : level.bpm,
      masterAudioNode : level.masterAudioNode,
      unlockPattern : [1, 3, 0, 2],
      url : 'level-1/bg-4.mp3',
      notes,
      noteTriggers : [
        new NoteTrigger({
          beats          : 8,
          beatCounter    : 0,
          masterAudioNode: level.masterAudioNode,
          position       : Math.PI,
          radius         : level.radius,
          startDelay     : 0,
        }),
      ],
    }),
    new Section({
      audioContext : level.audioContext,
      beats : 32,
      beatCounter : 32,
      bpm : level.bpm,
      masterAudioNode : level.masterAudioNode,
      unlockPattern : [1, 3, 1, 3],
      url : 'level-1/bg-5.mp3',
      notes,
      noteTriggers : [
        new NoteTrigger({
          beats          : 8,
          beatCounter    : 0,
          masterAudioNode: level.masterAudioNode,
          position       : -Math.PI*0.5,
          radius         : level.radius,
          startDelay     : 0,
        }),
        new NoteTrigger({
          beats          : 8,
          beatCounter    : 0,
          masterAudioNode: level.masterAudioNode,
          position       : Math.PI,
          radius         : level.radius,
          startDelay     : 4,
        }),
      ],
    }),
  ];

  return level;
}