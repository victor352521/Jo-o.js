void main() {
  isAuthorized('João');
}

void isAuthorized(String name) {
  List<String> auth = ['João', 'Pablo', 'Pedro'];
  if (auth.contains(name)) {
    print('Autorizado');
  } else {
    print('Não Autorizado');
    }
  }
