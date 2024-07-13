import tkinter as tk
from tkinter import ttk
from ttkthemes import ThemedTk


p=" el sol brilla"
q="los niños van a la escuela"
r="el mar es salado"
s="los perros son mamiferos"
pn="el sol no brilla"
qn="los niños no van a la escuela"
rn="el mar no es salado"
sn="los perros no son mamiferos"
an="y"
o="o"
condicional="si "
bicondicional="si y solamente  si"
root=ThemedTk(theme="equilux")
root.title("LOGICA PROPOSICIONAL")
root.resizable(1,1)
ancho=root.winfo_screenwidth()
alto=root.winfo_screenheight()

def automatico():
    lista=["el sol brilla","los niños van a la escuela","el mar es salado","los perros son mamiferos"]
    def evaluar_expresion(expresion):
    # Convertir palabras clave a operadores lógicos
     expresion = expresion.replace("no ", "not ")
     expresion = expresion.replace("y", "and")
     expresion = expresion.replace("o", "or")
     expresion = expresion.replace("si ", "if ")
     expresion = expresion.replace("entonces ", "then ")

     try:
        resultado = eval(expresion)
        return resultado
     except SyntaxError:
        return "Expresión no válida"

# Proposiciones en lenguaje natural
    proposiciones = [
     "El sol brilla",
     "Los niños van a la escuela",
     "El mar es salado",
     "Los perros son mamiferos",
     "El sol no brilla",
     "Los niños no van a la escuela",
     "El mar no es salado",
     "Los perros no son mamiferos",
 ]

# Convertir cada proposición en una expresión lógica y evaluar todas las combinaciones
    resultados = []
    for i in range(len(proposiciones)):
      for j in range(i + 1, len(proposiciones)):
       if j != (i+4):
        proposicion1 = proposiciones[i]
        proposicion2 = proposiciones[j]
        
        # Operaciones lógicas entre las proposiciones
        conjuncion = f"{proposicion1} y {proposicion2}"
        disyuncion = f"{proposicion1} o {proposicion2}"
        condicional = f"si {proposicion1}, entonces {proposicion2}"
        bicondicional=f"{proposicion1}, si y solo si {proposicion2}"
        
        # Evaluar las expresiones lógicas y almacenar los resultados
        resultado_conjuncion = evaluar_expresion(conjuncion)
        resultado_disyuncion = evaluar_expresion(disyuncion)
        resultado_condicional = evaluar_expresion(condicional)
        resultado_bicondicional=evaluar_expresion(bicondicional)
        
        resultados.append((conjuncion, resultado_conjuncion))
        resultados.append((disyuncion, resultado_disyuncion))
        resultados.append((condicional, resultado_condicional))
        resultados.append((bicondicional,resultado_bicondicional))


    root = tk.Tk()
    root.title("Resultados de Operaciones Lógicas")
    root.geometry("600x400")
    root.resizable(False,False)
    rooti=tk.Frame(root)
    rooti.pack(fill=tk.BOTH,expand=True)
    scrool=tk.Scrollbar(rooti)
    scrool.pack(side=tk.RIGHT,fill=tk.Y)
    listbox=tk.Listbox(rooti)
    listbox.pack(side=tk.LEFT,fill=tk.BOTH,expand=True)
    listbox.config(yscrollcommand=scrool.set)
    scrool.config(command=listbox.yview)




    for i, (expresion, resultado) in enumerate(resultados):
     listbox.insert(tk.END,f"{expresion}")

  

    
    
    

def manual():
  resultado=tk.StringVar()
  en1=tk.StringVar()
  en2=tk.StringVar()
  en3=tk.StringVar()
  en4=tk.StringVar()
  ventana2=tk.Toplevel(width=500, height=700)
    
  def operacionespyq():
    ventana3=tk.Toplevel()
    ventana3.geometry("900x700")
    def disyuncion():
        a=entry_manual.get()
        b=entry_manual2.get()
        r=f"{a} o {b}"
        resultado.set(r)
        
    def conjuncion():
        a=entry_manual.get() 
        b=entry_manual2.get()
        r=f"{a} y {b}"
        resultado.set(r)
    def condiciona():
        a=entry_manual.get()
        b=entry_manual2.get()
        r=f"{a} si {b}"
        resultado.set(r)
    def bicondiciona():
        a=entry_manual.get()
        b=entry_manual2.get()
        r=f"{a} si y solo si {b}"
        resultado.set(r)
    def pdisyuncion():
        a=entry_manual.get().split()
        a.insert(2,"no")
        a2=" ".join(a)
        b=entry_manual2.get()
        r=f"{a2} o {b}"
        resultado.set(r)
    def pconjuncion():
        a=entry_manual.get().split()
        a.insert(2,"no")
        a2=" ".join(a)
        b=entry_manual2.get()
        r=f"{a2} y {b}"
        resultado.set(r)
    def pcondicional():
        a=entry_manual.get().split()
        a.insert(2,"no")
        a2=" ".join(a)
        b=entry_manual2.get()
        r=f"{a2} si {b}"
        resultado.set(r)
    def pbicondicional():
        a=entry_manual.get().split()
        a.insert(2,"no")
        a2=" ".join(a)
        b=entry_manual2.get()
        r=f"{a2} si y solo si {b}"
        resultado.set(r)
    def qdisyuncion():
        a=entry_manual.get()
        b=entry_manual2.get().split()
        b.insert(2,"no")
        b2=" ".join(b)
        r=f"{a} o {b2}"
        resultado.set(r)
    def qconjuncion():
        a=entry_manual.get()
        b=entry_manual2.get().split()
        b.insert(2,"no")
        b2=" ".join(b)
        r=f"{a} y {b2}"
        resultado.set(r)
    def qcondicional():
        a=entry_manual.get()
        b=entry_manual2.get().split()
        b.insert(2,"no")
        b2=" ".join(b)
        r=f"{a} si {b2}"
        resultado.set(r)
    def qbicondicional():
        a=entry_manual.get()
        b=entry_manual2.get().split()
        b.insert(2,"no")
        b2=" ".join(b)
        
        r=f"{a} si y solo si {b2}"
        resultado.set(r)
    def pqdisyuncion():
        a=entry_manual.get().split()
        b=entry_manual2.get().split()
        b.insert(2,"no")
        b2=" ".join(b)
        a.insert(2,"no")
        a2=" ".join(a)
        
        r=f"{a2} o {b2}"
        resultado.set(r)
    def pqconjuncion():
        a=entry_manual.get().split()
        b=entry_manual2.get().split()
        b.insert(2,"no")
        b2=" ".join(b)
        a.insert(2,"no")
        a2=" ".join(a)
        
        r=f"{a2} y {b2}"
        resultado.set(r)
    def pqcondicional():
        a=entry_manual.get().split()
        b=entry_manual2.get().split()
        b.insert(2,"no")
        b2=" ".join(b)
        a.insert(2,"no")
        a2=" ".join(a)
        
        r=f"{a2} si {b2}"
        resultado.set(r)
    def pqbicondicional():
        a=entry_manual.get().split()
        b=entry_manual2.get().split()
        b.insert(2,"no")
        b2=" ".join(b)
        a.insert(2,"no")
        a2=" ".join(a)
        
        r=f"{a2} si y solo si {b2}"
        resultado.set(r)

    def borrartodo():
        resultado.set("")
        
    

    boton_manual=tk.Button(ventana3,text="p v q",font=("times new roman",14),command=disyuncion)
    boton_manual.place(x=70,y=180)
    boton_manual2=tk.Button(ventana3,text="p Ʌ q",font=("times new roman",14),command=conjuncion)
    boton_manual2.place(x=150,y=180)
    boton_manual3=tk.Button(ventana3,text="p -> q",font=("times new roman",14),command=condiciona)
    boton_manual3.place(x=250,y=180)
    boton_manual4=tk.Button(ventana3,text="p <-> q",font=("times new roman",14),command=bicondiciona)
    boton_manual4.place(x=350,y=180)
    boton_manual5=tk.Button(ventana3,text="p* v q",font=("times new roman",14),command=pdisyuncion)
    boton_manual5.place(x=70,y=240)
    boton_manual6=tk.Button(ventana3,text="p* Ʌ q",font=("times new roman",14),command=pconjuncion)
    boton_manual6.place(x=150,y=240)
    boton_manual7=tk.Button(ventana3,text="p* -> q",font=("times new roman",14),command=pcondicional)
    boton_manual7.place(x=250,y=240)
    boton_manual8=tk.Button(ventana3,text="p* <-> q",font=("times new roman",14),command=pbicondicional)
    boton_manual8.place(x=350,y=240)
    boton_manual9=tk.Button(ventana3,text="p v q*",font=("times new roman",14),command=qdisyuncion)
    boton_manual9.place(x=70,y=300)
    boton_manual10=tk.Button(ventana3,text="p Ʌ q*",font=("times new roman",14),command=qconjuncion)
    boton_manual10.place(x=150,y=300)
    boton_manual11=tk.Button(ventana3,text="p -> q*",font=("times new roman",14),command=qcondicional)
    boton_manual11.place(x=250,y=300)
    boton_manual12=tk.Button(ventana3,text="p <-> q*",font=("times new roman",14),command=qbicondicional)
    boton_manual12.place(x=350,y=300)
    boton_manual13=tk.Button(ventana3,text="p* v q*",font=("times new roman",14),command=pqdisyuncion)
    boton_manual13.place(x=70,y=360)
    boton_manual14=tk.Button(ventana3,text="p* Ʌ q*",font=("times new roman",14),command=pqconjuncion)
    boton_manual14.place(x=160,y=360)
    boton_manual15=tk.Button(ventana3,text="p* -> q*",font=("times new roman",14),command=pqcondicional)
    boton_manual15.place(x=250,y=360)
    boton_manual16=tk.Button(ventana3,text="p* <-> q*",font=("times new roman",14),command=pqbicondicional)
    boton_manual16.place(x=340,y=360)
    entry_manual3=tk.Entry(ventana3,font=("times new roman",16),width=40,textvariable=resultado)
    entry_manual3.place(x=30,y=460)
    boton_manual17=tk.Button(ventana3,text="Borrar todo",font=("times new roman",14),command=borrartodo)
    boton_manual17.place(x=180,y=560)

  def operacionespyr():
    ventana4=tk.Toplevel()
    ventana4.geometry("900x700")
    def disyuncion():
        a=entry_manual.get()
        b=entry_manual5.get()
        r=f"{a} o {b}"
        resultado.set(r)
        
    def conjuncion():
        a=entry_manual.get() 
        b=entry_manual5.get()
        r=f"{a} y {b}"
        resultado.set(r)
    def condiciona():
        a=entry_manual.get()
        b=entry_manual5.get()
        r=f"{a} si {b}"
        resultado.set(r)
    def bicondiciona():
        a=entry_manual.get()
        b=entry_manual5.get()
        r=f"{a} si y solo si {b}"
        resultado.set(r)
    def pdisyuncion():
        a=entry_manual.get().split()
        a.insert(2,"no")
        a2=" ".join(a)
        b=entry_manual5.get()
        r=f"{a2} o {b}"
        resultado.set(r)
    def pconjuncion():
        a=entry_manual.get().split()
        a.insert(2,"no")
        a2=" ".join(a)
        b=entry_manual5.get()
        r=f"{a2} y {b}"
        resultado.set(r)
    def pcondicional():
        a=entry_manual.get().split()
        a.insert(2,"no")
        a2=" ".join(a)
        b=entry_manual5.get()
        r=f"{a2} si {b}"
        resultado.set(r)
    def pbicondicional():
        a=entry_manual.get().split()
        a.insert(2,"no")
        a2=" ".join(a)
        b=entry_manual5.get()
        r=f"{a2} si y solo si {b}"
        resultado.set(r)
    def qdisyuncion():
        a=entry_manual.get()
        b=entry_manual5.get().split()
        b.insert(2,"no")
        b2=" ".join(b)
        r=f"{a} o {b2}"
        resultado.set(r)
    def qconjuncion():
        a=entry_manual.get()
        b=entry_manual5.get().split()
        b.insert(2,"no")
        b2=" ".join(b)
        r=f"{a} y {b2}"
        resultado.set(r)
    def qcondicional():
        a=entry_manual.get()
        b=entry_manual5.get().split()
        b.insert(2,"no")
        b2=" ".join(b)
        r=f"{a} si {b2}"
        resultado.set(r)
    def qbicondicional():
        a=entry_manual.get()
        b=entry_manual5.get().split()
        b.insert(2,"no")
        b2=" ".join(b)
        
        r=f"{a} si y solo si {b2}"
        resultado.set(r)
    def pqdisyuncion():
        a=entry_manual.get().split()
        b=entry_manual5.get().split()
        b.insert(2,"no")
        b2=" ".join(b)
        a.insert(2,"no")
        a2=" ".join(a)
        
        r=f"{a2} o {b2}"
        resultado.set(r)
    def pqconjuncion():
        a=entry_manual.get().split()
        b=entry_manual5.get().split()
        b.insert(2,"no")
        b2=" ".join(b)
        a.insert(2,"no")
        a2=" ".join(a)
        
        r=f"{a2} y {b2}"
        resultado.set(r)
    def pqcondicional():
        a=entry_manual.get().split()
        b=entry_manual5.get().split()
        b.insert(2,"no")
        b2=" ".join(b)
        a.insert(2,"no")
        a2=" ".join(a)
        
        r=f"{a2} si {b2}"
        resultado.set(r)
    def pqbicondicional():
        a=entry_manual.get().split()
        b=entry_manual5.get().split()
        b.insert(2,"no")
        b2=" ".join(b)
        a.insert(2,"no")
        a2=" ".join(a)
        
        r=f"{a2} si y solo si {b2}"
        resultado.set(r)

    def borrartodo():
        resultado.set("")
      

    

    boton_manual=tk.Button(ventana4,text="P v R",font=("times new roman",14),command=disyuncion)
    boton_manual.place(x=70,y=180)
    boton_manual2=tk.Button(ventana4,text="p Ʌ r",font=("times new roman",14),command=conjuncion)
    boton_manual2.place(x=150,y=180)
    boton_manual3=tk.Button(ventana4,text="p -> r",font=("times new roman",14),command=condiciona)
    boton_manual3.place(x=250,y=180)
    boton_manual4=tk.Button(ventana4,text="p <-> r",font=("times new roman",14),command=bicondiciona)
    boton_manual4.place(x=350,y=180)
    boton_manual5=tk.Button(ventana4,text="p* v r",font=("times new roman",14),command=pdisyuncion)
    boton_manual5.place(x=70,y=240)
    boton_manual6=tk.Button(ventana4,text="p* Ʌ r",font=("times new roman",14),command=pconjuncion)
    boton_manual6.place(x=150,y=240)
    boton_manual7=tk.Button(ventana4,text="p* -> r",font=("times new roman",14),command=pcondicional)
    boton_manual7.place(x=250,y=240)
    boton_manual8=tk.Button(ventana4,text="p* <-> r",font=("times new roman",14),command=pbicondicional)
    boton_manual8.place(x=350,y=240)
    boton_manual9=tk.Button(ventana4,text="p v r*",font=("times new roman",14),command=qdisyuncion)
    boton_manual9.place(x=70,y=300)
    boton_manual10=tk.Button(ventana4,text="p Ʌ r*",font=("times new roman",14),command=qconjuncion)
    boton_manual10.place(x=150,y=300)
    boton_manual11=tk.Button(ventana4,text="p -> r*",font=("times new roman",14),command=qcondicional)
    boton_manual11.place(x=250,y=300)
    boton_manual12=tk.Button(ventana4,text="p <-> r*",font=("times new roman",14),command=qbicondicional)
    boton_manual12.place(x=350,y=300)
    boton_manual13=tk.Button(ventana4,text="p* v r*",font=("times new roman",14),command=pqdisyuncion)
    boton_manual13.place(x=70,y=360)
    boton_manual14=tk.Button(ventana4,text="p* Ʌ r*",font=("times new roman",14),command=pqconjuncion)
    boton_manual14.place(x=160,y=360)
    boton_manual15=tk.Button(ventana4,text="p* -> r*",font=("times new roman",14),command=pqcondicional)
    boton_manual15.place(x=250,y=360)
    boton_manual16=tk.Button(ventana4,text="p* <-> r*",font=("times new roman",14),command=pqbicondicional)
    boton_manual16.place(x=340,y=360)
    entry_manual3=tk.Entry(ventana4,font=("times new roman",16),width=40,textvariable=resultado)
    entry_manual3.place(x=30,y=460)
    boton_manual17=tk.Button(ventana4,text="Borrar todo",font=("times new roman",14),command=borrartodo)
    boton_manual17.place(x=180,y=560)
    
  def operacionespys():
    ventana5=tk.Toplevel()
    ventana5.geometry("900x700")
    def disyuncion():
        a=entry_manual.get()
        b=entry_manual4.get()
        r=f"{a} o {b}"
        resultado.set(r)
        
    def conjuncion():
        a=entry_manual.get() 
        b=entry_manual4.get()
        r=f"{a} y {b}"
        resultado.set(r)
    def condiciona():
        a=entry_manual.get()
        b=entry_manual4.get()
        r= f"{a} si {b}"
        resultado.set(r)
    def bicondiciona():
        a=entry_manual.get()
        b=entry_manual4.get()
        r=f"{a} si y solo si {b}"
        resultado.set(r)
    def pdisyuncion():
        a=entry_manual.get().split()
        a.insert(2,"no")
        a2=" ".join(a)
        b=entry_manual4.get()
        r=f"{a2} o {b}"
        resultado.set(r)
    def pconjuncion():
        a=entry_manual.get().split()
        a.insert(2,"no")
        a2=" ".join(a)
        b=entry_manual4.get()
        r=f"{a2} y {b}"
        resultado.set(r)
    def pcondicional():
        a=entry_manual.get().split()
        a.insert(2,"no")
        a2=" ".join(a)
        b=entry_manual4.get()
        r=f"{a2} si {b}"
        resultado.set(r)
    def pbicondicional():
        a=entry_manual.get().split()
        a.insert(2,"no")
        a2=" ".join(a)
        b=entry_manual4.get()
        r=f"{a2} si y solo si {b}"
        resultado.set(r)
    def qdisyuncion():
        a=entry_manual.get()
        b=entry_manual4.get().split()
        b.insert(2,"no")
        b2=" ".join(b)
        r=f"{a} o {b2}"
        resultado.set(r)
    def qconjuncion():
        a=entry_manual.get()
        b=entry_manual4.get().split()
        b.insert(2,"no")
        b2=" ".join(b)
        r=f"{a} y {b2}"
        resultado.set(r)
    def qcondicional():
        a=entry_manual.get()
        b=entry_manual4.get().split()
        b.insert(2,"no")
        b2=" ".join(b)
        r=f"{a} si {b2}"
        resultado.set(r)
    def qbicondicional():
        a=entry_manual.get()
        b=entry_manual4.get().split()
        b.insert(2,"no")
        b2=" ".join(b)
        
        r=f"{a} si y solo si {b2}"
        resultado.set(r)
    def pqdisyuncion():
        a=entry_manual.get().split()
        b=entry_manual4.get().split()
        b.insert(2,"no")
        b2=" ".join(b)
        a.insert(2,"no")
        a2=" ".join(a)
        
        r=f"{a2} o {b2}"
        resultado.set(r)
    def pqconjuncion():
        a=entry_manual.get().split()
        b=entry_manual4.get().split()
        b.insert(2,"no")
        b2=" ".join(b)
        a.insert(2,"no")
        a2=" ".join(a)
        
        r=f"{a2} y {b2}"
        resultado.set(r)
    def pqcondicional():
        a=entry_manual.get().split()
        b=entry_manual4.get().split()
        b.insert(2,"no")
        b2=" ".join(b)
        a.insert(2,"no")
        a2=" ".join(a)
        
        r=f"{a2} si {b2}"
        resultado.set(r)
    def pqbicondicional():
        a=entry_manual.get().split()
        b=entry_manual4.get().split()
        b.insert(2,"no")
        b2=" ".join(b)
        a.insert(2,"no")
        a2=" ".join(a)
        
        r=f"{a2} si y solo si {b2}"
        resultado.set(r)

    def borrartodo():
        resultado.set("")
        


    boton_manual=tk.Button(ventana5,text="P v s",font=("times new roman",14),command=disyuncion)
    boton_manual.place(x=70,y=180)
    boton_manual2=tk.Button(ventana5,text="p Ʌ s",font=("times new roman",14),command=conjuncion)
    boton_manual2.place(x=150,y=180)
    boton_manual3=tk.Button(ventana5,text="p -> s",font=("times new roman",14),command=condiciona)
    boton_manual3.place(x=250,y=180)
    boton_manual4=tk.Button(ventana5,text="p <-> ",font=("times new roman",14),command=bicondiciona)
    boton_manual4.place(x=350,y=180)
    boton_manual5=tk.Button(ventana5,text="p* v s",font=("times new roman",14),command=pdisyuncion)
    boton_manual5.place(x=70,y=240)
    boton_manual6=tk.Button(ventana5,text="p* Ʌ s",font=("times new roman",14),command=pconjuncion)
    boton_manual6.place(x=150,y=240)
    boton_manual7=tk.Button(ventana5,text="p* -> s",font=("times new roman",14),command=pcondicional)
    boton_manual7.place(x=250,y=240)
    boton_manual8=tk.Button(ventana5,text="p* <-> s",font=("times new roman",14),command=pbicondicional)
    boton_manual8.place(x=350,y=240)
    boton_manual9=tk.Button(ventana5,text="p v s*",font=("times new roman",14),command=qdisyuncion)
    boton_manual9.place(x=70,y=300)
    boton_manual10=tk.Button(ventana5,text="p Ʌ s*",font=("times new roman",14),command=qconjuncion)
    boton_manual10.place(x=150,y=300)
    boton_manual11=tk.Button(ventana5,text="p -> s*",font=("times new roman",14),command=qcondicional)
    boton_manual11.place(x=250,y=300)
    boton_manual12=tk.Button(ventana5,text="p <-> s*",font=("times new roman",14),command=qbicondicional)
    boton_manual12.place(x=350,y=300)
    boton_manual13=tk.Button(ventana5,text="p* v s*",font=("times new roman",14),command=pqdisyuncion)
    boton_manual13.place(x=70,y=360)
    boton_manual14=tk.Button(ventana5,text="p* Ʌ s*",font=("times new roman",14),command=pqconjuncion)
    boton_manual14.place(x=160,y=360)
    boton_manual15=tk.Button(ventana5,text="p* -> s*",font=("times new roman",14),command=pqcondicional)
    boton_manual15.place(x=250,y=360)
    boton_manual16=tk.Button(ventana5,text="p* <-> s*",font=("times new roman",14),command=pqbicondicional)
    boton_manual16.place(x=340,y=360)
    entry_manual3=tk.Entry(ventana5,font=("times new roman",16),width=40,textvariable=resultado)
    entry_manual3.place(x=30,y=460)
    boton_manual17=tk.Button(ventana5,text="Borrar todo",font=("times new roman",14),command=borrartodo)
    boton_manual17.place(x=180,y=560) 

    
  def operacionesqyr():
    ventana6=tk.Toplevel()
    ventana6.geometry("900x700")
    def disyuncion():
        a=entry_manual2.get()
        b=entry_manual5.get()
        r=f"{a} o {b}"
        resultado.set(r)
        
    def conjuncion():
        a=entry_manual2.get() 
        b=entry_manual5.get()
        r=f"{a} y {b}"
        resultado.set(r)
    def condiciona():
        a=entry_manual2.get()
        b=entry_manual5.get()
        r= f"{a} si {b}"
        resultado.set(r)
    def bicondiciona():
        a=entry_manual2.get()
        b=entry_manual5.get()
        r=f"{a} si y solo si {b}"
        resultado.set(r)
    def pdisyuncion():
        a=entry_manual2.get().split()
        a.insert(2,"no")
        a2=" ".join(a)
        b=entry_manual5.get()
        r=f"{a2} o {b}"
        resultado.set(r)
    def pconjuncion():
        a=entry_manual2.get().split()
        a.insert(2,"no")
        a2=" ".join(a)
        b=entry_manual5.get()
        r=f"{a2} y {b}"
        resultado.set(r)
    def pcondicional():
        a=entry_manual2.get().split()
        a.insert(2,"no")
        a2=" ".join(a)
        b=entry_manual5.get()
        r=f"{a2} si {b}"
        resultado.set(r)
    def pbicondicional():
        a=entry_manual2.get().split()
        a.insert(2,"no")
        a2=" ".join(a)
        b=entry_manual5.get()
        r=f"{a2} si y solo si {b}"
        resultado.set(r)
    def qdisyuncion():
        a=entry_manual2.get()
        b=entry_manual5.get().split()
        b.insert(2,"no")
        b2=" ".join(b)
        r=f"{a} o {b2}"
        resultado.set(r)
    def qconjuncion():
        a=entry_manual2.get()
        b=entry_manual5.get().split()
        b.insert(2,"no")
        b2=" ".join(b)
        r=f"{a} y {b2}"
        resultado.set(r)
    def qcondicional():
        a=entry_manual2.get()
        b=entry_manual5.get().split()
        b.insert(2,"no")
        b2=" ".join(b)
        r=f"{a} si {b2}"
        resultado.set(r)
    def qbicondicional():
        a=entry_manual2.get()
        b=entry_manual5.get().split()
        b.insert(2,"no")
        b2=" ".join(b)
        
        r=f"{a} si y solo si {b2}"
        resultado.set(r)
    def pqdisyuncion():
        a=entry_manual2.get().split()
        b=entry_manual5.get().split()
        b.insert(2,"no")
        b2=" ".join(b)
        a.insert(2,"no")
        a2=" ".join(a)
        
        r=f"{a2} o {b2}"
        resultado.set(r)
    def pqconjuncion():
        a=entry_manual2.get().split()
        b=entry_manual5.get().split()
        b.insert(2,"no")
        b2=" ".join(b)
        a.insert(2,"no")
        a2=" ".join(a)
        
        r=f"{a2} y {b2}"
        resultado.set(r)
    def pqcondicional():
        a=entry_manual2.get().split()
        b=entry_manual5.get().split()
        b.insert(2,"no")
        b2=" ".join(b)
        a.insert(2,"no")
        a2=" ".join(a)
        
        r=f"{a2} si {b2}"
        resultado.set(r)
    def pqbicondicional():
        a=entry_manual2.get().split()
        b=entry_manual5.get().split()
        b.insert(2,"no")
        b2=" ".join(b)
        a.insert(2,"no")
        a2=" ".join(a)
        
        r=f"{a2} si y solo si {b2}"
        resultado.set(r)

    def borrartodo():
        resultado.set("")
        


    boton_manual=tk.Button(ventana6,text="q v r",font=("times new roman",14),command=disyuncion)
    boton_manual.place(x=70,y=180)
    boton_manual2=tk.Button(ventana6,text="q Ʌ r",font=("times new roman",14),command=conjuncion)
    boton_manual2.place(x=150,y=180)
    boton_manual3=tk.Button(ventana6,text="q -> r",font=("times new roman",14),command=condiciona)
    boton_manual3.place(x=250,y=180)
    boton_manual4=tk.Button(ventana6,text="q <-> r",font=("times new roman",14),command=bicondiciona)
    boton_manual4.place(x=350,y=180)
    boton_manual5=tk.Button(ventana6,text="q* v r",font=("times new roman",14),command=pdisyuncion)
    boton_manual5.place(x=70,y=240)
    boton_manual6=tk.Button(ventana6,text="q* Ʌ r",font=("times new roman",14),command=pconjuncion)
    boton_manual6.place(x=150,y=240)
    boton_manual7=tk.Button(ventana6,text="q* -> r",font=("times new roman",14),command=pcondicional)
    boton_manual7.place(x=250,y=240)
    boton_manual8=tk.Button(ventana6,text="q* <-> r",font=("times new roman",14),command=pbicondicional)
    boton_manual8.place(x=350,y=240)
    boton_manual9=tk.Button(ventana6,text="q v r*",font=("times new roman",14),command=qdisyuncion)
    boton_manual9.place(x=70,y=300)
    boton_manual10=tk.Button(ventana6,text="q Ʌ r*",font=("times new roman",14),command=qconjuncion)
    boton_manual10.place(x=150,y=300)
    boton_manual11=tk.Button(ventana6,text="q -> r*",font=("times new roman",14),command=qcondicional)
    boton_manual11.place(x=250,y=300)
    boton_manual12=tk.Button(ventana6,text="q <-> r*",font=("times new roman",14),command=qbicondicional)
    boton_manual12.place(x=350,y=300)
    boton_manual13=tk.Button(ventana6,text="q* v r*",font=("times new roman",14),command=pqdisyuncion)
    boton_manual13.place(x=70,y=360)
    boton_manual14=tk.Button(ventana6,text="q* Ʌ r*",font=("times new roman",14),command=pqconjuncion)
    boton_manual14.place(x=160,y=360)
    boton_manual15=tk.Button(ventana6,text="q* -> r*",font=("times new roman",14),command=pqcondicional)
    boton_manual15.place(x=250,y=360)
    boton_manual16=tk.Button(ventana6,text="q* <-> r*",font=("times new roman",14),command=pqbicondicional)
    boton_manual16.place(x=340,y=360)
    entry_manual3=tk.Entry(ventana6,font=("times new roman",16),width=40,textvariable=resultado)
    entry_manual3.place(x=30,y=460)
    boton_manual17=tk.Button(ventana6,text="Borrar todo",font=("times new roman",14),command=borrartodo)
    boton_manual17.place(x=180,y=560) 



  def operacionesqys():
    ventana7=tk.Toplevel()
    ventana7.geometry("900x700")
    def disyuncion():
        a=entry_manual2.get()
        b=entry_manual4.get()
        r=f"{a} o {b}"
        resultado.set(r)
        
    def conjuncion():
        a=entry_manual2.get() 
        b=entry_manual4.get()
        r=f"{a} y {b}"
        resultado.set(r)
    def condiciona():
        a=entry_manual2.get()
        b=entry_manual4.get()
        r= f"{a} si {b}"
        resultado.set(r)
    def bicondiciona():
        a=entry_manual2.get()
        b=entry_manual4.get()
        r=f"{a} si y solo si {b}"
        resultado.set(r)
    def pdisyuncion():
        a=entry_manual2.get().split()
        a.insert(2,"no")
        a2=" ".join(a)
        b=entry_manual4.get()
        r=f"{a2} o {b}"
        resultado.set(r)
    def pconjuncion():
        a=entry_manual2.get().split()
        a.insert(2,"no")
        a2=" ".join(a)
        b=entry_manual4.get()
        r=f"{a2} y {b}"
        resultado.set(r)
    def pcondicional():
        a=entry_manual2.get().split()
        a.insert(2,"no")
        a2=" ".join(a)
        b=entry_manual4.get()
        r=f"{a2} si {b}"
        resultado.set(r)
    def pbicondicional():
        a=entry_manual2.get().split()
        a.insert(2,"no")
        a2=" ".join(a)
        b=entry_manual4.get()
        r=f"{a2} si y solo si {b}"
        resultado.set(r)
    def qdisyuncion():
        a=entry_manual2.get()
        b=entry_manual4.get().split()
        b.insert(2,"no")
        b2=" ".join(b)
        r=f"{a} o {b2}"
        resultado.set(r)
    def qconjuncion():
        a=entry_manual2.get()
        b=entry_manual4.get().split()
        b.insert(2,"no")
        b2=" ".join(b)
        r=f"{a} y {b2}"
        resultado.set(r)
    def qcondicional():
        a=entry_manual2.get()
        b=entry_manual4.get().split()
        b.insert(2,"no")
        b2=" ".join(b)
        r=f"{a} si {b2}"
        resultado.set(r)
    def qbicondicional():
        a=entry_manual2.get()
        b=entry_manual4.get().split()
        b.insert(2,"no")
        b2=" ".join(b)
        
        r=f"{a} si y solo si {b2}"
        resultado.set(r)
    def pqdisyuncion():
        a=entry_manual2.get().split()
        b=entry_manual4.get().split()
        b.insert(2,"no")
        b2=" ".join(b)
        a.insert(2,"no")
        a2=" ".join(a)
        
        r=f"{a2} o {b2}"
        resultado.set(r)
    def pqconjuncion():
        a=entry_manual2.get().split()
        b=entry_manual4.get().split()
        b.insert(2,"no")
        b2=" ".join(b)
        a.insert(2,"no")
        a2=" ".join(a)
        
        r=f"{a2} y {b2}"
        resultado.set(r)
    def pqcondicional():
        a=entry_manual2.get().split()
        b=entry_manual4.get().split()
        b.insert(2,"no")
        b2=" ".join(b)
        a.insert(2,"no")
        a2=" ".join(a)
        
        r=f"{a2} si {b2}"
        resultado.set(r)
    def pqbicondicional():
        a=entry_manual2.get().split()
        b=entry_manual4.get().split()
        b.insert(2,"no")
        b2=" ".join(b)
        a.insert(2,"no")
        a2=" ".join(a)
        
        r=f"{a2} si y solo si {b2}"
        resultado.set(r)

    def borrartodo():
        resultado.set("")
       

    boton_manual=tk.Button(ventana7,text="q v s",font=("times new roman",14),command=disyuncion)
    boton_manual.place(x=70,y=180)
    boton_manual2=tk.Button(ventana7,text="q Ʌ s",font=("times new roman",14),command=conjuncion)
    boton_manual2.place(x=150,y=180)
    boton_manual3=tk.Button(ventana7,text="q -> s",font=("times new roman",14),command=condiciona)
    boton_manual3.place(x=250,y=180)
    boton_manual4=tk.Button(ventana7,text="q <-> s",font=("times new roman",14),command=bicondiciona)
    boton_manual4.place(x=350,y=180)
    boton_manual5=tk.Button(ventana7,text="q* v s",font=("times new roman",14),command=pdisyuncion)
    boton_manual5.place(x=70,y=240)
    boton_manual6=tk.Button(ventana7,text="q* Ʌ s",font=("times new roman",14),command=pconjuncion)
    boton_manual6.place(x=150,y=240)
    boton_manual7=tk.Button(ventana7,text="q* -> s",font=("times new roman",14),command=pcondicional)
    boton_manual7.place(x=250,y=240)
    boton_manual8=tk.Button(ventana7,text="q* <-> s",font=("times new roman",14),command=pbicondicional)
    boton_manual8.place(x=350,y=240)
    boton_manual9=tk.Button(ventana7,text="q v s*",font=("times new roman",14),command=qdisyuncion)
    boton_manual9.place(x=70,y=300)
    boton_manual10=tk.Button(ventana7,text="q Ʌ s*",font=("times new roman",14),command=qconjuncion)
    boton_manual10.place(x=150,y=300)
    boton_manual11=tk.Button(ventana7,text="q -> s*",font=("times new roman",14),command=qcondicional)
    boton_manual11.place(x=250,y=300)
    boton_manual12=tk.Button(ventana7,text="q <-> s*",font=("times new roman",14),command=qbicondicional)
    boton_manual12.place(x=350,y=300)
    boton_manual13=tk.Button(ventana7,text="q* v s*",font=("times new roman",14),command=pqdisyuncion)
    boton_manual13.place(x=70,y=360)
    boton_manual14=tk.Button(ventana7,text="q* Ʌ s*",font=("times new roman",14),command=pqconjuncion)
    boton_manual14.place(x=160,y=360)
    boton_manual15=tk.Button(ventana7,text="q* -> s*",font=("times new roman",14),command=pqcondicional)
    boton_manual15.place(x=250,y=360)
    boton_manual16=tk.Button(ventana7,text="q* <-> s*",font=("times new roman",14),command=pqbicondicional)
    boton_manual16.place(x=340,y=360)
    entry_manual3=tk.Entry(ventana7,font=("times new roman",16),width=40,textvariable=resultado)
    entry_manual3.place(x=30,y=460)
    boton_manual17=tk.Button(ventana7,text="Borrar todo",font=("times new roman",14),command=borrartodo)
    boton_manual17.place(x=180,y=560) 

 
  def operacionessyr():
    ventana8=tk.Toplevel()
    ventana8.geometry("900x700")
    def disyuncion():
        a=entry_manual5.get()
        b=entry_manual4.get()
        r=f"{a} o {b}"
        resultado.set(r)
        
    def conjuncion():
        a=entry_manual5.get() 
        b=entry_manual4.get()
        r=f"{a} y {b}"
        resultado.set(r)
    def condiciona():
        a=entry_manual5.get()
        b=entry_manual4.get()
        r= f"{a} si {b}"
        resultado.set(r)
    def bicondiciona():
        a=entry_manual5.get()
        b=entry_manual4.get()
        r=f"{a} si y solo si {b}"
        resultado.set(r)
    def pdisyuncion():
        a=entry_manual5.get().split()
        a.insert(2,"no")
        a2=" ".join(a)
        b=entry_manual4.get()
        r=f"{a2} o {b}"
        resultado.set(r)
    def pconjuncion():
        a=entry_manual5.get().split()
        a.insert(2,"no")
        a2=" ".join(a)
        b=entry_manual4.get()
        r=f"{a2} y {b}"
        resultado.set(r)
    def pcondicional():
        a=entry_manual5.get().split()
        a.insert(2,"no")
        a2=" ".join(a)
        b=entry_manual4.get()
        r=f"{a2} si {b}"
        resultado.set(r)
    def pbicondicional():
        a=entry_manual5.get().split()
        a.insert(2,"no")
        a2=" ".join(a)
        b=entry_manual4.get()
        r=f"{a2} si y solo si {b}"
        resultado.set(r)
    def qdisyuncion():
        a=entry_manual5.get()
        b=entry_manual4.get().split()
        b.insert(2,"no")
        b2=" ".join(b)
        r=f"{a} o {b2}"
        resultado.set(r)
    def qconjuncion():
        a=entry_manual5.get()
        b=entry_manual4.get().split()
        b.insert(2,"no")
        b2=" ".join(b)
        r=f"{a} y {b2}"
        resultado.set(r)
    def qcondicional():
        a=entry_manual5.get()
        b=entry_manual4.get().split()
        b.insert(2,"no")
        b2=" ".join(b)
        r=f"{a} si {b2}"
        resultado.set(r)
    def qbicondicional():
        a=entry_manual.get()
        b=entry_manual4.get().split()
        b.insert(2,"no")
        b2=" ".join(b)
        
        r=f"{a} si y solo si {b2}"
        resultado.set(r)
    def pqdisyuncion():
        a=entry_manual5.get().split()
        b=entry_manual4.get().split()
        b.insert(2,"no")
        b2=" ".join(b)
        a.insert(2,"no")
        a2=" ".join(a)
        
        r=f"{a2} o {b2}"
        resultado.set(r)
    def pqconjuncion():
        a=entry_manual5.get().split()
        b=entry_manual4.get().split()
        b.insert(2,"no")
        b2=" ".join(b)
        a.insert(2,"no")
        a2=" ".join(a)
        
        r=f"{a2} y {b2}"
        resultado.set(r)
    def pqcondicional():
        a=entry_manual5.get().split()
        b=entry_manual4.get().split()
        b.insert(2,"no")
        b2=" ".join(b)
        a.insert(2,"no")
        a2=" ".join(a)
        
        r=f"{a2} si {b2}"
        resultado.set(r)
    def pqbicondicional():
        a=entry_manual5.get().split()
        b=entry_manual4.get().split()
        b.insert(2,"no")
        b2=" ".join(b)
        a.insert(2,"no")
        a2=" ".join(a)
        
        r=f"{a2} si y solo si {b2}"
        resultado.set(r)

    def borrartodo():
        resultado.set("")
        


    boton_manual=tk.Button(ventana8,text="r v s",font=("times new roman",14),command=disyuncion)
    boton_manual.place(x=70,y=180)
    boton_manual2=tk.Button(ventana8,text="r Ʌ s",font=("times new roman",14),command=conjuncion)
    boton_manual2.place(x=150,y=180)
    boton_manual3=tk.Button(ventana8,text="r -> s",font=("times new roman",14),command=condiciona)
    boton_manual3.place(x=250,y=180)
    boton_manual4=tk.Button(ventana8,text="r <-> ",font=("times new roman",14),command=bicondiciona)
    boton_manual4.place(x=350,y=180)
    boton_manual5=tk.Button(ventana8,text="r* v s",font=("times new roman",14),command=pdisyuncion)
    boton_manual5.place(x=70,y=240)
    boton_manual6=tk.Button(ventana8,text="r* Ʌ s",font=("times new roman",14),command=pconjuncion)
    boton_manual6.place(x=150,y=240)
    boton_manual7=tk.Button(ventana8,text="r* -> s",font=("times new roman",14),command=pcondicional)
    boton_manual7.place(x=250,y=240)
    boton_manual8=tk.Button(ventana8,text="r* <-> s",font=("times new roman",14),command=pbicondicional)
    boton_manual8.place(x=350,y=240)
    boton_manual9=tk.Button(ventana8,text="r v s*",font=("times new roman",14),command=qdisyuncion)
    boton_manual9.place(x=70,y=300)
    boton_manual10=tk.Button(ventana8,text="r Ʌ s*",font=("times new roman",14),command=qconjuncion)
    boton_manual10.place(x=150,y=300)
    boton_manual11=tk.Button(ventana8,text="r -> s*",font=("times new roman",14),command=qcondicional)
    boton_manual11.place(x=250,y=300)
    boton_manual12=tk.Button(ventana8,text="r <-> s*",font=("times new roman",14),command=qbicondicional)
    boton_manual12.place(x=350,y=300)
    boton_manual13=tk.Button(ventana8,text="r* v s*",font=("times new roman",14),command=pqdisyuncion)
    boton_manual13.place(x=70,y=360)
    boton_manual14=tk.Button(ventana8,text="r* Ʌ s*",font=("times new roman",14),command=pqconjuncion)
    boton_manual14.place(x=160,y=360)
    boton_manual15=tk.Button(ventana8,text="r* -> s*",font=("times new roman",14),command=pqcondicional)
    boton_manual15.place(x=250,y=360)
    boton_manual16=tk.Button(ventana8,text="r* <-> s*",font=("times new roman",14),command=pqbicondicional)
    boton_manual16.place(x=340,y=360)
    entry_manual3=tk.Entry(ventana8,font=("times new roman",16),width=40,textvariable=resultado)
    entry_manual3.place(x=30,y=460)
    boton_manual17=tk.Button(ventana8,text="Borrar todo",font=("times new roman",14),command=borrartodo)
    boton_manual17.place(x=180,y=560) 





  eti_manual=tk.Label(ventana2,text="Ingrese las dos proposciones",font=("times new roman",16))
  eti_manual.place(x=10,y=20)
  eti_manual2=tk.Label(ventana2,text="Ingrese Q",font=("times new roman",10))
  eti_manual2.place(x=10,y=80)
  eti_manual3=tk.Label(ventana2,text="Ingrese P",font=("times new roman",10))
  eti_manual3.place(x=10,y=120)
  entry_manual=tk.Entry(ventana2,font=("times new roman",10),textvariable=en1)
  entry_manual.place(x=70,y=120)
  entry_manual2=tk.Entry(ventana2,font=("times new roman",10),textvariable=en2)
  entry_manual2.place(x=70,y=80)
  eti_manual2=tk.Label(ventana2,text="Ingrese R",font=("times new roman",10))
  eti_manual2.place(x=200,y=80)
  eti_manual3=tk.Label(ventana2,text="Ingrese S",font=("times new roman",10))
  eti_manual3.place(x=200,y=120)
  entry_manual4=tk.Entry(ventana2,font=("times new roman",10),textvariable=en3)
  entry_manual4.place(x=270,y=120)
  entry_manual5=tk.Entry(ventana2,font=("times new roman",10),textvariable=en4)
  entry_manual5.place(x=270,y=80)
    
  pconq=tk.Button(ventana2,text="Operaciones de P con Q",font=("times new roman",16),command=operacionespyq)
  pconq.place(x=70,y=200)
  pconr=tk.Button(ventana2,text="Operaciones de P con R",font=("times new roman",16),command=operacionespyr)
  pconr.place(x=70,y=280)
  pcons=tk.Button(ventana2,text="Operaciones de P con S",font=("times new roman",16),command=operacionespys)
  pcons.place(x=70,y=360)
  qconr=tk.Button(ventana2,text="Operaciones de Q con R",font=("times new roman",16),command=operacionesqyr)
  qconr.place(x=70,y=440)
  qcons=tk.Button(ventana2,text="Operaciones de Q con S",font=("times new roman",16),command=operacionesqys)
  qcons.place(x=70,y=520)
  sconr=tk.Button(ventana2,text="Operaciones de R con S",font=("times new roman",16),command=operacionessyr)
  sconr.place(x=70,y=600)
     





  
  

ventana=ttk.Frame(root,width=ancho,height=alto)
ventana.pack()
etiqueta1=ttk.Label(ventana,text="logica proposicional",font=("Times new roman",18))
etiqueta1.place(x=500,y=20)
etiqueta2=ttk.Label(ventana,text=p,font=("Times new roman",14))
etiqueta2.place(x=30,y=60)
etiqueta3=ttk.Label(ventana,text=q,font=("Times new roman",14))
etiqueta3.place(x=30,y=90)
etiqueta4=ttk.Label(ventana,text=r,font=("Times new roman",14))
etiqueta4.place(x=30,y=120)
etiqueta5=ttk.Label(ventana,text=s,font=("Times new roman",14))
etiqueta5.place(x=30,y=150)
boton1=ttk.Button(ventana,text="Automatico",style="My.TButton",command=automatico)
boton1.place(x=300,y=100)
boton1=ttk.Button(ventana,text="Manual",style="My.TButton",command=manual)
boton1.place(x=500,y=100)
eboton=ttk.Style()
eboton.configure("My.TButton",background="PaleTurquoise",font=("Times new roman",14))

root.mainloop()
