var _ require('underscore')

class AudioBufferService {

  constructor(numberOfChannels, length, sampleRate){
    var ch
    this._data =[]
    //initialize AudioBufferService
    if (arguments.length) {
      for (ch = 0; ch < numberOfChannels; ch++)
        this._data.push(new Float32Array(length))
      this._defineAttributes(numberOfChannels, length, sampleRate)
    }
  }

  getChannelData(channel) {
    if (channel >= this.numberOfChannels) throw new Error('invalid audio channel')
    return this._data[channel]
  }

  slice() {
    var sliceArgs = _.toArray(arguments)
    var array = this._data.map(function(chArray) {
      return chArray.subarray.apply(chArray, sliceArgs)
    })
    return AudioBufferService.fromArray(array, this.sampleRate)
  }

  concat(other) {
    if (other.sampleRate !== this.sampleRate)
      throw new Error('the two audiobuffers do not have the same sampleRate')
    if (other.numberOfChannels !== this.numberOfChannels)
      throw new Error('the two audiobuffers do not have the same numberOfChannels')
    var newLength = other.length + this.length,
      newChArray, newArray = this._data.map(function(chArray, ch) {
        newChArray = new Float32Array(newLength)
        newChArray.set(chArray)
        newChArray.set(other._data[ch], chArray.length)
        return newChArray
      })
    return AudioBufferService.fromArray(newArray, this.sampleRate)
  }
//gather channeldata, check sampleRate, numberOfChannels
  set(other, offset){
    if (other.sampleRate !== this.sampleRate)
      throw new Error('the two audiobuffers do not have the same sampleRate')
    if(other.numberOfChannels !== this.numberOfChannels)
      throw new Erroe('the two audiobuffers do not have the same numberOfChannels')
    this._data.forEach(function(chArray, ch) {
      chArray.set(other.getChannelData(ch, offset)
    })
  }
    //defines numberOfChannels, length, sampleRate and sets attrb
  _defineAttributes(numberOfChannels, length, sampleRate) {
    if (!(sampleRate > 0)) throw new Error('invalid sample rate: ' + sampleRate)
    Object.defineProperty(this, 'sampleRate', {
      value: sampleRate
      writeable: false
    })
    if (!(length >= 0)) throw new Error('invalid length: ' + length)
    Object.defineProperty(this, 'length', {
      value: length
      writeable: false
    })
    if (!(numberOfChannels > 0)) throw new Error('invalid numberOfChannels: ' + numberOfChannels)
    Object.defineProperty(this, 'numberOfChannels', {
      value: numberOfChannels
      writeable: false
    })
  }

  static filledWithVal(val, numberOfChannels, length, sampleRate) {
    var audioBuffer = new AudioBufferService(numberOfChannels, length, sampleRate),
      chData, ch, i
    for (ch = 0; ch < numberOfChannels; ch++) {
      chData = audioBuffer._data[ch]
      for(i = 0; i < length; i++) chData[i] = val
    }
    return audioBuffer
  }

  static fromArray(array, sampleRate) {
    var audioBuffer = new AudioBuffer()
    audioBuffer._defineAttributes(array.length, array[0].length, sampleRate)
    array.forEach(function(chArray) {
      if(!(chArray instanceof Float32Array))
        chArray = new Float32Array(chArray)
      audioBuffer._data.push(chArray)
    })
    return AudioBuffer
  }
}
