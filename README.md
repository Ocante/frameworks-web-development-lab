# Frameworks for Software Development — Practical Labs

Four practical projects implementing the coursework requirements with Java, Spring Web MVC, Apache Tomcat, HTML5, CSS3, Bootstrap 5, JavaScript, jQuery, and ViaCEP.

## Modules

| Directory | Implementation | Run |
| --- | --- | --- |
| `activity-01-tomcat-spring-mvc` | Tomcat + Java Spring MVC smoke-test | Maven WAR on Tomcat 8.5 / 9 |
| `activity-02-cep-form` | Responsive CEP lookup form | Local browser / Live Server |
| `activity-03-spring-registration` | Spring MVC registration form (JSP / Bootstrap 5) | Maven WAR on Tomcat 8.5 / 9 |
| `activity-04-customer-validation` | Bootstrap form, ViaCEP and jQuery validation | Local browser / Live Server |

## Prerequisites

- JDK 17, Apache Maven 3.9+ and Apache Tomcat **8.5/9** for the Java modules.
- The **course guide specifically uses Tomcat 8.x and NetBeans**. Tomcat 8.5 is an end-of-life version: use it only in an isolated local educational environment, never internet-exposed. The repository also supports Tomcat 9 in local development. Tomcat 10+ uses `jakarta.*` and is not compatible with these `javax.*` applications without migration.
- NetBeans or VS Code can edit the project. Maven builds standard WAR files.
- Internet access for Bootstrap, jQuery CDNs and ViaCEP web service.

## Run Spring MVC (activities 1 and 3)

```powershell
cd activity-01-tomcat-spring-mvc
mvn clean package
# Copy target/tomcat-spring-mvc.war to TOMCAT_HOME/webapps/
# Start TOMCAT_HOME/bin/startup.bat
# Open http://localhost:8080/tomcat-spring-mvc/
```

For activity 3, use the directory `activity-03-spring-registration`, copy `target/spring-registration.war` and open `http://localhost:8080/spring-registration/`.

## Run standalone frontend modules

Open `activity-02-cep-form/index.html` or `activity-04-customer-validation/index.html` with VS Code Live Server / local HTTP server. Enter a real Brazilian CEP (e.g. `01001000`) and leave the CEP field to start the lookup. ViaCEP is a third-party service; it can be temporarily unavailable.

```powershell
cd activity-02-cep-form
python -m http.server 5500
# http://localhost:5500/
```

## Validation

- CEP must contain eight digits; missing CEP, unrecognized CEP and network failures are handled.
- Activity 4 checks mandatory fields, email pattern and CEP format with jQuery.
- No accounts are persisted; the forms are educational prototypes. Do not use real passwords.
- `tests/check_structure.py` checks project files and source structure, **not runtime functionality**.

## Evidence and reporting

The report in `docs/` is a draft that must be completed using real screenshots obtained from a successful local run. Screenshots will be placed only in `docs/evidence/` after execution. No simulated runtime proof is included.

[Português](README.pt-BR.md)
