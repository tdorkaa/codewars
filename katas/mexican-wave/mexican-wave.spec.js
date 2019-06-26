const mexicanWave = require('./mexican-wave');

describe('MexicanWave', function() {
  it('input: hello', function() {
    const result = mexicanWave('hello');
    expect(result).to.eql(['Hello', 'hEllo', 'heLlo', 'helLo', 'hellO']);
  });

  it('input: codewars', function() {
    const result = mexicanWave('codewars');
    expect(result).to.eql(['Codewars', 'cOdewars', 'coDewars', 'codEwars', 'codeWars', 'codewArs', 'codewaRs', 'codewarS']);
  });

  it('input: empty string', function() {
    const result = mexicanWave('');
    expect(result).to.eql([]);
  });

  it('input: two words', function() {
    const result = mexicanWave('two words');
    expect(result).to.eql(['Two words', 'tWo words', 'twO words', 'two Words', 'two wOrds', 'two woRds', 'two worDs', 'two wordS']);
  });

  it('input: _gap_', function() {
    const result = mexicanWave(' gap ');
    expect(result).to.eql([' Gap ', ' gAp ', ' gaP ']);
  });

  it('input: _gap_2', function() {
    const result = mexicanWave(' ga p ');
    expect(result).to.eql([' Ga p ', ' gA p ', ' ga P ']);
  });
});
