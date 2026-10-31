from pathlib import Path
root = Path(__file__).resolve().parents[1]
expected = [
 'activity-01-tomcat-spring-mvc/pom.xml',
 'activity-02-cep-form/index.html',
 'activity-02-cep-form/assets/js/controller.js',
 'activity-03-spring-registration/pom.xml',
 'activity-04-customer-validation/index.html',
 'activity-04-customer-validation/assets/js/main.js',
 'activity-04-customer-validation/assets/js/validation.js'
]
for file in expected:
 assert (root/file).is_file(), f'Missing file: {file}'
 print('PASS', file)
print('Structure checks passed. Runtime is not verified.')
