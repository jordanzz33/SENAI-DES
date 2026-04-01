import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(debugShowCheckedModeBanner: false, home: App()));
}

class App extends StatefulWidget {
  const App({super.key});

  @override
  State<App> createState() => _AppState();
}

class _AppState extends State<App> {
  double valor = 0;
  double juros = 0;
  int parcelas = 0;
  double taxas = 0;

  double valorParcela = 0;
  double valorTotal = 0;

  void calcular() {
    double taxa = juros / 100;
    double jurosTotal = valor * taxa * parcelas;

    valorTotal = valor + jurosTotal + taxas;
    valorParcela = valorTotal / parcelas;

    setState(() {});
  }

  Widget campo(String label, Function(String) onChanged) {
    return TextField(
      keyboardType: TextInputType.number,
      decoration: InputDecoration(
        labelText: label,
        border: OutlineInputBorder(),
      ),
      onChanged: onChanged,
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Simulador"), centerTitle: true),

      body: Padding(
        padding: EdgeInsets.all(20),
        child: Column(
          children: [
            campo("Valor", (v) => valor = double.parse(v)),
            SizedBox(height: 10),

            campo("Juros (%)", (v) => juros = double.parse(v)),
            SizedBox(height: 10),

            campo("Parcelas", (v) => parcelas = int.parse(v)),
            SizedBox(height: 10),

            campo("Taxas", (v) => taxas = double.parse(v)),
            SizedBox(height: 20),

            SizedBox(
              width: double.infinity,
              child: ElevatedButton(
                onPressed: calcular,
                child: Text("Calcular"),
              ),
            ),

            SizedBox(height: 20),

            Text("Total: R\$ ${valorTotal.toStringAsFixed(2)}"),
            Text("Parcela: R\$ ${valorParcela.toStringAsFixed(2)}"),
          ],
        ),
      ),
    );
  }
}
