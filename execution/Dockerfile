FROM openjdk:21
LABEL authors="anoop"
ARG JAR_FILE=./target/execution-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","/app.jar"]