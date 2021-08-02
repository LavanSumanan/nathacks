# this file will have bermuda widgets to be imported and displayed by a mainwindow

from multiprocessing import Process, Queue, set_start_method
import pdb
import csv
import time
import random
import numpy as np
from matplotlib.figure import Figure
from matplotlib.backends.backend_qt5agg import FigureCanvasQTAgg
import sys
from math import sqrt, acos, pi
from PyQt5 import QtGui
from PyQt5 import QtCore, QtWidgets

import matplotlib.pyplot as plt
import matplotlib

matplotlib.use('Qt5Agg')


class MplCanvas(FigureCanvasQTAgg):

    def __init__(self, parent=None, width=5, height=4, dpi=100):
        fig = Figure(figsize=(width, height), dpi=dpi)
        fig.patch.set_facecolor('w')
        fig.set_tight_layout(True)
        self.axes = fig.add_subplot(1, 1, 1)
        self.axes.set_facecolor('w')
        self.fig = fig
        super(MplCanvas, self).__init__(fig)
