import tkinter as tk
from tkinter import messagebox
import re
import itertools

class TablaDeVerdadApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Tabla de Verdad")
        
        self.premisa_label = tk.Label(root, text="Premisa:")
        self.premisa_label.pack()
        self.premisa_entry = tk.Entry(root)
        self.premisa_entry.pack()
        
        self.ejecutar_button = tk.Button(root, text="Ejecutar", command=self.ejecutar)
        self.ejecutar_button.pack()

        self.resultado_text = tk.Text(root, height=10, width=50)
        self.resultado_text.pack()

    def identificar_variables_operadores(self, premisa):
        premisa = premisa.lower()
        variables = set(re.findall(r'\b[a-z]\b', premisa))
        operadores = set(re.findall(r'\b(and|or|not|si|entonces|si y solo si)\b', premisa))
        return variables, operadores

    def generar_tabla_de_verdad(self, expresion, variables):
        combinaciones = itertools.product([False, True], repeat=len(variables))
        tabla_verdad = []

        for combinacion in combinaciones:
            asignaciones = dict(zip(variables, combinacion))
            resultado = self.evaluar_expresion(expresion, asignaciones)
            tabla_verdad.append((asignaciones, resultado))
        
        return tabla_verdad

    def evaluar_expresion(self, expresion, asignaciones):
     expresion = expresion.replace('si', 'if').replace('entonces', ':').replace('si y solo si', '==')

     for variable, valor in asignaciones.items():
        expresion = expresion.replace(variable, str(valor))
     return eval(expresion)


    def ejecutar(self):
        premisa = self.premisa_entry.get()
        try:
            variables, _ = self.identificar_variables_operadores(premisa)
            tabla_verdad = self.generar_tabla_de_verdad(premisa, variables)
            verdades = [resultado for _, resultado in tabla_verdad]
            if all(verdades):
                resultado = "Tautología"
            elif not any(verdades):
                resultado = "Contradicción"
            else:
                resultado = "Contingencia"

            mensaje = f"La premisa es una {resultado}.\n\nTabla de Verdad:\n"
            for asignaciones, resultado in tabla_verdad:
                asignaciones_str = ", ".join([f"{var}={val}" for var, val in asignaciones.items()])
                mensaje += f"{asignaciones_str} => {resultado}\n"

            self.resultado_text.delete(1.0, tk.END)
            self.resultado_text.insert(tk.END, mensaje)
        except Exception as e:
            messagebox.showerror("Error", f"Error al evaluar la premisa: {e}")

if __name__ == "__main__":
    root = tk.Tk()
    app = TablaDeVerdadApp(root)
    root.mainloop()
