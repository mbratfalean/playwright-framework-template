"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston = require(`winston`);
const console = new winston.transports.Console();
const logger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    transports: [
        // - Write all logs with importance level of `info` or less than it
        new winston.transports.File({ filename: "logs/info.log", level: "info" }),
    ],
});
// Writes logs to console
logger.add(console);
class CustomReporterConfig {
    constructor(options = {}) {
        console.log(`playwright-framework-template ${options.customOption}`);
    }
    onBegin(config, suite) {
        logger.info(`Test Suite Started : ${suite.title} , ${suite.allTests().length} tests`);
    }
    onTestBegin(test) {
        logger.info(`Test Case Started : ${test.title}`);
    }
    onTestEnd(test, result) {
        logger.info(`Test Case Completed : ${test.title} Status : ${result.status}`);
    }
    onStepBegin(test, result, step) {
        if (step.category === `test.step`) {
            logger.info(`Executing Step : ${step.title}`);
        }
    }
    onError(error) {
        logger.error("TestError : ", error.message);
    }
    onEnd(result) {
        console.log(`Test Suite Completed : ${result.status}`);
    }
}
exports.default = CustomReporterConfig;
