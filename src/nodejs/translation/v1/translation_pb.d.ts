// package: sagittarius.translation.v1
// file: translation/v1/translation.proto

/* tslint:disable */

import * as jspb from "google-protobuf";
import * as google_rpc_status_pb from "../../google/rpc/status_pb";
import * as google_cloud_speech_v1_cloud_speech_pb from "../../google/cloud/speech/v1/cloud_speech_pb";

export class MediaTranslationRequest extends jspb.Message { 
    getMediaIdentity(): string;
    setMediaIdentity(value: string): void;

    getLanguageCode(): string;
    setLanguageCode(value: string): void;

    getFormat(): string;
    setFormat(value: string): void;

    getStartTime(): number;
    setStartTime(value: number): void;

    getHints(): string;
    setHints(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MediaTranslationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: MediaTranslationRequest): MediaTranslationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MediaTranslationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MediaTranslationRequest;
    static deserializeBinaryFromReader(message: MediaTranslationRequest, reader: jspb.BinaryReader): MediaTranslationRequest;
}

export namespace MediaTranslationRequest {
    export type AsObject = {
        mediaIdentity: string,
        languageCode: string,
        format: string,
        startTime: number,
        hints: string,
    }
}

export class MediaTranslationResponse extends jspb.Message { 

    hasError(): boolean;
    clearError(): void;
    getError(): google_rpc_status_pb.Status | undefined;
    setError(value?: google_rpc_status_pb.Status): void;

    clearResultsList(): void;
    getResultsList(): Array<MediaTranslationResponse.TranscriptInfo>;
    setResultsList(value: Array<MediaTranslationResponse.TranscriptInfo>): void;
    addResults(value?: MediaTranslationResponse.TranscriptInfo, index?: number): MediaTranslationResponse.TranscriptInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MediaTranslationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MediaTranslationResponse): MediaTranslationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MediaTranslationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MediaTranslationResponse;
    static deserializeBinaryFromReader(message: MediaTranslationResponse, reader: jspb.BinaryReader): MediaTranslationResponse;
}

export namespace MediaTranslationResponse {
    export type AsObject = {
        error?: google_rpc_status_pb.Status.AsObject,
        resultsList: Array<MediaTranslationResponse.TranscriptInfo.AsObject>,
    }


    export class TranscriptInfo extends jspb.Message { 
    getTranscriptIdentity(): string;
    setTranscriptIdentity(value: string): void;

    getLanguageCode(): string;
    setLanguageCode(value: string): void;

    getRanking(): number;
    setRanking(value: number): void;

    clearTagsList(): void;
    getTagsList(): Array<string>;
    setTagsList(value: Array<string>): void;
    addTags(value: string, index?: number): string;

    getDelay(): number;
    setDelay(value: number): void;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): TranscriptInfo.AsObject;
        static toObject(includeInstance: boolean, msg: TranscriptInfo): TranscriptInfo.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: TranscriptInfo, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): TranscriptInfo;
        static deserializeBinaryFromReader(message: TranscriptInfo, reader: jspb.BinaryReader): TranscriptInfo;
    }

    export namespace TranscriptInfo {
        export type AsObject = {
        transcriptIdentity: string,
        languageCode: string,
        ranking: number,
        tagsList: Array<string>,
        delay: number,
        }
    }

}

export class DetectionRequest extends jspb.Message { 
    getText(): string;
    setText(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DetectionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DetectionRequest): DetectionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DetectionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DetectionRequest;
    static deserializeBinaryFromReader(message: DetectionRequest, reader: jspb.BinaryReader): DetectionRequest;
}

export namespace DetectionRequest {
    export type AsObject = {
        text: string,
    }
}

export class DetectionResponse extends jspb.Message { 
    clearPredictionList(): void;
    getPredictionList(): Array<DetectionPrediction>;
    setPredictionList(value: Array<DetectionPrediction>): void;
    addPrediction(value?: DetectionPrediction, index?: number): DetectionPrediction;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DetectionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DetectionResponse): DetectionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DetectionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DetectionResponse;
    static deserializeBinaryFromReader(message: DetectionResponse, reader: jspb.BinaryReader): DetectionResponse;
}

export namespace DetectionResponse {
    export type AsObject = {
        predictionList: Array<DetectionPrediction.AsObject>,
    }
}

export class DetectionPrediction extends jspb.Message { 
    getLanguageCode(): string;
    setLanguageCode(value: string): void;

    getConfidence(): number;
    setConfidence(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DetectionPrediction.AsObject;
    static toObject(includeInstance: boolean, msg: DetectionPrediction): DetectionPrediction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DetectionPrediction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DetectionPrediction;
    static deserializeBinaryFromReader(message: DetectionPrediction, reader: jspb.BinaryReader): DetectionPrediction;
}

export namespace DetectionPrediction {
    export type AsObject = {
        languageCode: string,
        confidence: number,
    }
}

export class TranscriptRequest extends jspb.Message { 
    getTranscriptIdentity(): string;
    setTranscriptIdentity(value: string): void;

    getStartTime(): number;
    setStartTime(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TranscriptRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TranscriptRequest): TranscriptRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TranscriptRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TranscriptRequest;
    static deserializeBinaryFromReader(message: TranscriptRequest, reader: jspb.BinaryReader): TranscriptRequest;
}

export namespace TranscriptRequest {
    export type AsObject = {
        transcriptIdentity: string,
        startTime: number,
    }
}

export class TranscriptResponse extends jspb.Message { 

    hasError(): boolean;
    clearError(): void;
    getError(): google_rpc_status_pb.Status | undefined;
    setError(value?: google_rpc_status_pb.Status): void;

    clearTranscriptsList(): void;
    getTranscriptsList(): Array<TranscriptResponse.Cue>;
    setTranscriptsList(value: Array<TranscriptResponse.Cue>): void;
    addTranscripts(value?: TranscriptResponse.Cue, index?: number): TranscriptResponse.Cue;

    getIsEndOfTranscript(): boolean;
    setIsEndOfTranscript(value: boolean): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TranscriptResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TranscriptResponse): TranscriptResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TranscriptResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TranscriptResponse;
    static deserializeBinaryFromReader(message: TranscriptResponse, reader: jspb.BinaryReader): TranscriptResponse;
}

export namespace TranscriptResponse {
    export type AsObject = {
        error?: google_rpc_status_pb.Status.AsObject,
        transcriptsList: Array<TranscriptResponse.Cue.AsObject>,
        isEndOfTranscript: boolean,
    }


    export class Cue extends jspb.Message { 
    getStartTime(): number;
    setStartTime(value: number): void;

    getEndTime(): number;
    setEndTime(value: number): void;

    getText(): string;
    setText(value: string): void;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Cue.AsObject;
        static toObject(includeInstance: boolean, msg: Cue): Cue.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Cue, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Cue;
        static deserializeBinaryFromReader(message: Cue, reader: jspb.BinaryReader): Cue;
    }

    export namespace Cue {
        export type AsObject = {
        startTime: number,
        endTime: number,
        text: string,
        }
    }

}

export class StreamingTranslationRequest extends jspb.Message { 

    hasStreamingConfig(): boolean;
    clearStreamingConfig(): void;
    getStreamingConfig(): google_cloud_speech_v1_cloud_speech_pb.RecognitionConfig | undefined;
    setStreamingConfig(value?: google_cloud_speech_v1_cloud_speech_pb.RecognitionConfig): void;


    hasAudioContent(): boolean;
    clearAudioContent(): void;
    getAudioContent(): Uint8Array | string;
    getAudioContent_asU8(): Uint8Array;
    getAudioContent_asB64(): string;
    setAudioContent(value: Uint8Array | string): void;


    getStreamingRequestCase(): StreamingTranslationRequest.StreamingRequestCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamingTranslationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StreamingTranslationRequest): StreamingTranslationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamingTranslationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamingTranslationRequest;
    static deserializeBinaryFromReader(message: StreamingTranslationRequest, reader: jspb.BinaryReader): StreamingTranslationRequest;
}

export namespace StreamingTranslationRequest {
    export type AsObject = {
        streamingConfig?: google_cloud_speech_v1_cloud_speech_pb.RecognitionConfig.AsObject,
        audioContent: Uint8Array | string,
    }

    export enum StreamingRequestCase {
        STREAMINGREQUEST_NOT_SET = 0,
    
    STREAMING_CONFIG = 1,

    AUDIO_CONTENT = 2,

    }

}

export class StreamingTranslationResponse extends jspb.Message { 

    hasError(): boolean;
    clearError(): void;
    getError(): google_rpc_status_pb.Status | undefined;
    setError(value?: google_rpc_status_pb.Status): void;

    clearResultsList(): void;
    getResultsList(): Array<StreamingTranslationResult>;
    setResultsList(value: Array<StreamingTranslationResult>): void;
    addResults(value?: StreamingTranslationResult, index?: number): StreamingTranslationResult;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamingTranslationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StreamingTranslationResponse): StreamingTranslationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamingTranslationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamingTranslationResponse;
    static deserializeBinaryFromReader(message: StreamingTranslationResponse, reader: jspb.BinaryReader): StreamingTranslationResponse;
}

export namespace StreamingTranslationResponse {
    export type AsObject = {
        error?: google_rpc_status_pb.Status.AsObject,
        resultsList: Array<StreamingTranslationResult.AsObject>,
    }
}

export class StreamingTranslationResult extends jspb.Message { 
    getTranscript(): string;
    setTranscript(value: string): void;

    getConfidence(): number;
    setConfidence(value: number): void;

    getStability(): number;
    setStability(value: number): void;

    getStartTime(): number;
    setStartTime(value: number): void;

    getEndTime(): number;
    setEndTime(value: number): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StreamingTranslationResult.AsObject;
    static toObject(includeInstance: boolean, msg: StreamingTranslationResult): StreamingTranslationResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StreamingTranslationResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StreamingTranslationResult;
    static deserializeBinaryFromReader(message: StreamingTranslationResult, reader: jspb.BinaryReader): StreamingTranslationResult;
}

export namespace StreamingTranslationResult {
    export type AsObject = {
        transcript: string,
        confidence: number,
        stability: number,
        startTime: number,
        endTime: number,
    }
}

export class TextTranslationRequest extends jspb.Message { 
    clearTextList(): void;
    getTextList(): Array<string>;
    setTextList(value: Array<string>): void;
    addText(value: string, index?: number): string;

    getTargetLanguageCode(): string;
    setTargetLanguageCode(value: string): void;

    getSourceLanguageCode(): string;
    setSourceLanguageCode(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TextTranslationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TextTranslationRequest): TextTranslationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TextTranslationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TextTranslationRequest;
    static deserializeBinaryFromReader(message: TextTranslationRequest, reader: jspb.BinaryReader): TextTranslationRequest;
}

export namespace TextTranslationRequest {
    export type AsObject = {
        textList: Array<string>,
        targetLanguageCode: string,
        sourceLanguageCode: string,
    }
}

export class TextTranslationResponse extends jspb.Message { 

    hasError(): boolean;
    clearError(): void;
    getError(): google_rpc_status_pb.Status | undefined;
    setError(value?: google_rpc_status_pb.Status): void;

    clearResultsList(): void;
    getResultsList(): Array<TextTranslationResponse.Text>;
    setResultsList(value: Array<TextTranslationResponse.Text>): void;
    addResults(value?: TextTranslationResponse.Text, index?: number): TextTranslationResponse.Text;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TextTranslationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TextTranslationResponse): TextTranslationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TextTranslationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TextTranslationResponse;
    static deserializeBinaryFromReader(message: TextTranslationResponse, reader: jspb.BinaryReader): TextTranslationResponse;
}

export namespace TextTranslationResponse {
    export type AsObject = {
        error?: google_rpc_status_pb.Status.AsObject,
        resultsList: Array<TextTranslationResponse.Text.AsObject>,
    }


    export class Text extends jspb.Message { 
    getSourceLanguage(): string;
    setSourceLanguage(value: string): void;

    getText(): string;
    setText(value: string): void;


        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Text.AsObject;
        static toObject(includeInstance: boolean, msg: Text): Text.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Text, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Text;
        static deserializeBinaryFromReader(message: Text, reader: jspb.BinaryReader): Text;
    }

    export namespace Text {
        export type AsObject = {
        sourceLanguage: string,
        text: string,
        }
    }

}
