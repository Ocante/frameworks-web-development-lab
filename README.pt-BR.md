# Laboratório — Frameworks para Desenvolvimento de Software

Implementação das quatro atividades práticas propostas na disciplina: servidor Tomcat com Spring MVC, consulta de endereços por CEP, formulário JSP com Bootstrap 5 e validações JavaScript/jQuery.

## Estrutura

1. `activity-01-tomcat-spring-mvc/`: aplicação Java Web simples, implantável no Apache Tomcat.
2. `activity-02-cep-form/`: formulário HTML5, CSS3, JavaScript e consulta à API pública ViaCEP.
3. `activity-03-spring-registration/`: formulário de cadastro com Spring Web MVC, JSP e Bootstrap 5.
4. `activity-04-customer-validation/`: cadastro responsivo, validação com jQuery, consulta CEP em `main.js` e validação em `validation.js`.

## Executar no Windows

**Requisitos:** JDK 17, Maven, Tomcat 8.5 ou 9, navegador e conexão à internet para CDN/ViaCEP. O roteiro institucional usa especificamente Tomcat 8.x e NetBeans. **Tomcat 8.5 não recebe mais suporte de segurança**: utilizar somente em laboratório isolado, não publicar na internet.

### Atividade 1

```powershell
cd activity-01-tomcat-spring-mvc
mvn clean package
# Copiar target/tomcat-spring-mvc.war para a pasta webapps do Tomcat
# Iniciar o Tomcat e abrir http://localhost:8080/tomcat-spring-mvc/
```

### Atividade 2

Abrir `activity-02-cep-form/index.html` pelo Live Server do VS Code. Informar CEP com 8 dígitos (ex.: `01001000`), sair do campo e observar o preenchimento.

### Atividade 3

```powershell
cd activity-03-spring-registration
mvn clean package
# Copiar target/spring-registration.war para webapps do Tomcat
# Abrir http://localhost:8080/spring-registration/
```

### Atividade 4

Abrir `activity-04-customer-validation/index.html` pelo Live Server. Verificar campos vazios, e-mail inválido e CEP. O formulário não envia os dados a um banco; é uma demonstração de validação.

## Atenção ao roteiro

O texto do roteiro lista 11 campos nominalmente para o cadastro, embora uma seção mencione 12. Foram implementados os 11 explicitamente nomeados: nome, sobrenome, e-mail, senha, CEP, rua, bairro, cidade, estado, número e complemento.

## Relatório e evidências

O documento em `docs/` é um **rascunho de entrega**. Após executar os módulos, registrar capturas reais de navegador, NetBeans e Tomcat em `docs/evidence/`. Nenhum resultado de execução foi presumido.

[English](README.md)
