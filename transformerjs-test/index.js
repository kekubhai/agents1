// Install required packages:
// npm install @huggingface/hub
// npm install @tensorflow/tfjs
// npm install @xenova/transformers

import { pipeline } from '@xenova/transformers';

// 1. Named Entity Recognition (NER)
async function performNER(text) {
    try {
        // Initialize the NER pipeline
        const ner = await pipeline('token-classification', 'Xenova/bert-base-NER');
        
        // Perform NER
        const entities = await ner(text);
        return entities;
    } catch (error) {
        console.error('NER Error:', error);
        throw error;
    }
}

// 2. Zero-shot Classification
async function classifyText(text, labels) {
    try {
        // Initialize the zero-shot classification pipeline
        const classifier = await pipeline('zero-shot-classification', 'Xenova/distilbert-base-uncased-mnli');
        
        // Perform classification
        const result = await classifier(text, labels);
        return result;
    } catch (error) {
        console.error('Classification Error:', error);
        throw error;
    }
}

// 3. Fill-Mask (Predict masked words)
async function fillMask(text) {
    try {
        // Initialize the fill-mask pipeline
        const unmasker = await pipeline('fill-mask', 'Xenova/bert-base-cased');
        
        // Perform mask filling
        const results = await unmasker(text);
        return results;
    } catch (error) {
        console.error('Fill-Mask Error:', error);
        throw error;
    }
}

// Example usage
async function runExamples() {
    try {
        // 1. Named Entity Recognition Example
        console.log('\nPerforming Named Entity Recognition...');
        const nerText = "John works at Microsoft in Seattle and loves drinking Starbucks coffee.";
        const entities = await performNER(nerText);
        console.log('Identified entities:', entities);

        // 2. Zero-shot Classification Example
        console.log('\nPerforming Zero-shot Classification...');
        const classificationText = "This movie was absolutely amazing, I loved every minute of it!";
        const labels = ['positive', 'negative', 'neutral'];
        const classification = await classifyText(classificationText, labels);
        console.log('Classification results:', classification);

        // 3. Fill-Mask Example
        console.log('\nPerforming Fill-Mask prediction...');
        const maskText = "The [MASK] is shining brightly today.";
        const maskPredictions = await fillMask(maskText);
        console.log('Mask predictions:', maskPredictions);

    } catch (error) {
        console.error('Error in examples:', error);
    }
}

// Run all examples
runExamples();

// Example usage with custom text:
/*
// For NER
const customText = "Sarah visited Google's headquarters in Mountain View last week.";
const customEntities = await performNER(customText);
console.log(customEntities);

// For Classification
const customClassText = "This product broke after two days of use.";
const customLabels = ['satisfied', 'unsatisfied', 'neutral'];
const customClassification = await classifyText(customClassText, customLabels);
console.log(customClassification);

// For Fill-Mask
const customMaskText = "The [MASK] played beautiful music.";
const customMaskPredictions = await fillMask(customMaskText);
console.log(customMaskPredictions);
*/